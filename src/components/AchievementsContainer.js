import React, { useState, useEffect } from 'react';
import { games } from '../../dummy-data/GameData';
import GameCard from '../components/GameCard';
import '../../styles/AchievementsContainer.css';

export default function AchievementsContainer() {
  const [gameList, setGameList] = useState(games);
  const [sortType, setSortType] = useState('lastPlayed'); // default sort type

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

  return (
    <div className="games-container">
      <div className="sort-buttons">
        <button style={{backgroundColor: '#518abb', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer'}}>🏆 View All Achievements</button>

        <button onClick={() => setSortType('lastPlayed')} style={{backgroundColor: '#2a475e', color: 'white', border: 'none', padding: '10px 15px', margin: '10px', borderRadius: '5px', cursor: 'pointer'}}>Sort by: Last Played</button>

        <button onClick={() => setSortType('name')} style={{backgroundColor: '#2a475e', color: 'white', border: 'none', padding: '10px 15px', margin: '10px', borderRadius: '5px', cursor: 'pointer'}}>Sort by: Name</button>

        <button onClick={() => setSortType('achievementCompletion')} style={{backgroundColor: '#2a475e', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer'}}>Sort by: Achievements Completion</button>
      </div>
      <div className="games-list" style={{overflowY: 'scroll', maxHeight: '70vh'}}>
        {gameList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}