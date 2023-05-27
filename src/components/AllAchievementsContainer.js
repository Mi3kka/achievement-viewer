import React, { useState } from 'react';
import { games } from '../../dummy-data/GameData';
import GameCard from '../components/GameCard';
import AchievementCard from '../components/AchievementCard';
import '../../styles/AchievementsContainer.css';

export default function AllAchievementsContainer({ handleViewAll }) {
  const [viewAll, setViewAll] = useState(false);

  const toggleView = () => {
    setViewAll(!viewAll);
  };

  if (!viewAll) {
    return (
      <div className="games-container">
        <button className="back-button" onClick={handleViewAll}>
          🔙 Back to Games
        </button>
        <div className="games-list" style={{ overflowY: 'scroll', maxHeight: '70vh' }}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <button className="toggle-view-button" onClick={toggleView}>
          🏆 View All Achievements
        </button>
      </div>
    );
  }

  return (
    <div className="games-container">
      <button className="back-button" onClick={toggleView}>
        🔙 Back to Games
      </button>
      <div className="achievements-list" style={{ overflowY: 'scroll', maxHeight: '70vh' }}>
        {games.flatMap((game) => game.achievementsList).map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}