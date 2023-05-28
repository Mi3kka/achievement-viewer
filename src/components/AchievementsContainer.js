import React, { useState, useEffect } from 'react';
import { games } from '../../dummy-data/GameData';
import GameCard from '../components/GameCard';
import AllAchievementsContainer from '../components/AllAchievementsContainer';
import '../../styles/AchievementsContainer.css';

export default function AchievementsContainer() {
  const [gameList, setGameList] = useState(games);
  const [sortType, setSortType] = useState('lastPlayed');
  const [viewAll, setViewAll] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameSearchTerm, setGameSearchTerm] = useState('');

  useEffect(() => {
    const sortGames = (type) => {
      const sortedGames = [...games];
      if (type === 'lastPlayed') {
        sortedGames.sort((a, b) => b.lastPlayed - a.lastPlayed);
      } else if (type === 'name') {
        sortedGames.sort((a, b) => a.name.localeCompare(b.name));
      } else if (type === 'achievementCompletion') {
        sortedGames.sort((a, b) => (b.achievements.completed / b.achievements.total) - (a.achievements.completed / a.achievements.total));
      }
      return sortedGames;
    };

    setGameList(sortGames(sortType));
  }, [sortType]);

  const handleViewAll = (game) => {
    setViewAll(!viewAll);
    setSelectedGame(game);
    setGameSearchTerm(game.name);  // Assuming game is an object with a name property
  };

  const handleGameCardClick = (gameName) => {
    setSelectedGame(gameName);
    setViewAll(true);
  };

  return (
    <div className="games-container">
      {viewAll ? (
        <AllAchievementsContainer
        handleViewAll={handleViewAll}
        selectedGame={selectedGame}
        gameSearchTerm={gameSearchTerm}
        setGameSearchTerm={setGameSearchTerm}
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
              <GameCard key={game.id} game={game} onClick={() => handleGameCardClick(game.name)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}