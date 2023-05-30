// GameCardContainer.js

import React, { useState, useEffect } from 'react';
import { games } from '../../dummy-data/GameData';
import GameCard from './GameCard';
import AchievementContainer from './AchievementContainer';
import '../../styles/GameCardContainer.css';

// Function that is called when the sort type is changed, for utility purposes (outside of component function)
const sortGames = (games, type) => {
  const sortedGames = [...games];
  switch(type) {
    case 'lastPlayed': // Sort by last played
      return sortedGames.sort((a, b) => b.lastPlayed - a.lastPlayed);
    case 'name': // Sort by name
      return sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    case 'achievementCompletion': // Sort by achievement completion
      return sortedGames.sort((a, b) => (b.achievements.completed / b.achievements.total) - (a.achievements.completed / a.achievements.total));
    default: // Default to last played as people tend to play games they've played recently
      return sortedGames;
  }
}

// The GameCardContainer component handles the list of games and the state change to to the all achievements page
export default function GameCardContainer() {

  // State variables for the list of games, the sort type, whether to view all achievements, and the clicked game
  const [gameList, setGameList] = useState(games);
  const [sortType, setSortType] = useState('lastPlayed');
  // viewAll is used to determine whether to show the list of games or the all achievements page
  const [viewAll, setViewAll] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [initialLockedFilter, setInitialLockedFilter] = useState(null);

  // Sort the games based on the sort type
  useEffect(() => {
    setGameList(sortGames(games, sortType));
  }, [sortType]);

  // Function to handle when the view all achievements button is clicked
  const handleViewAll = () => {
    setSelectedGame(null);
    setInitialLockedFilter(false);  // Set selectedGame to null when viewing all achievements
    setViewAll(!viewAll);
  };

  // Function to handle when a game card is clicked
  const handleGameCardClick = (game) => {
    setSelectedGame(game);
    setInitialLockedFilter(null);
    setViewAll(true);
  };

  return (
    <div className="games-container">
      {viewAll ? (
        <AchievementContainer
          handleViewAll={handleViewAll}
          selectedGame={selectedGame} // Pass the selected game to the AchievementContainer
          initialLockedFilter={initialLockedFilter}
        />
      ) : (
        <>
          <div className="sort-buttons">
            <button className="sort-button" onClick={handleViewAll}>🏆 View All Achievements</button>
            <button
              className={sortType === 'lastPlayed' ? "sort-button-active" : "sort-button"}
              onClick={() => setSortType('lastPlayed')}
            >Sort by: Last Played
            </button>
            <button
              className={sortType === 'name' ? "sort-button-active" : "sort-button"}
              onClick={() => setSortType('name')}
            > Sort by: Name
            </button>

            <button
              className={sortType === 'achievementCompletion' ? "sort-button-active" : "sort-button"}
              onClick={() => setSortType('achievementCompletion')}
            > Sort by: Completion
            </button>
          </div>
          <div className="games-list" style={{overflowY: 'scroll', maxHeight: '70vh'}}>
            {gameList.map((game) => (
              <GameCard key={game.id} game={game} onClick={() => handleGameCardClick(game)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}