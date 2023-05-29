import React, { useState, useEffect } from 'react';
import { games } from '../../dummy-data/GameData';
import GameCard from './GameCard';
import AchievementContainer from './AchievementContainer';
import '../../styles/GameCardContainer.css';

// Utility function for sorting games.
const sortGames = (games, type) => {
  const sortedGames = [...games];
  switch(type) {
    case 'lastPlayed':
      return sortedGames.sort((a, b) => b.lastPlayed - a.lastPlayed);
    case 'name':
      return sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    case 'achievementCompletion':
      return sortedGames.sort((a, b) => (b.achievements.completed / b.achievements.total) - (a.achievements.completed / a.achievements.total));
    default:
      return sortedGames;
  }
}

export default function GameCardContainer() {
  const [gameList, setGameList] = useState(games);
  const [sortType, setSortType] = useState('lastPlayed');
  const [viewAll, setViewAll] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [initialLockedFilter, setInitialLockedFilter] = useState(null);

  useEffect(() => {
    setGameList(sortGames(games, sortType));
  }, [sortType]);

  const handleViewAll = () => {
    setSelectedGame(null);
    setInitialLockedFilter(false);  // Set selectedGame to null when viewing all achievements
    setViewAll(!viewAll);
  };

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
          selectedGame={selectedGame}
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