//AchievementContainer.js

import { useState, useEffect } from 'react';
import { games } from '../../dummy-data/GameData';
import AchievementCard from './AchievementCard';
import '../../styles/GameCardContainer.css';
import '../../styles/AchievementContainer.css';
import Image from 'next/image';


function AchievementContainer({ handleViewAll, selectedGame }) {
  const [gameSearchTerm, setGameSearchTerm] = useState(selectedGame ? selectedGame.name : '');
  const [achievementSearchTerm, setAchievementSearchTerm] = useState('');
  const [lockedFilter, setLockedFilter] = useState(false);
  const [visibilityFilter, setVisibilityFilter] = useState(null);
  const [sortMethod, setSortMethod] = useState(null);
  const [filteredAchievements, setFilteredAchievements] = useState([]);

  const achievements = games.reduce(
    (acc, game) => [...acc, ...game.achievementsList.map((achievement) => ({ ...achievement, game }))],
    []
  );

  useEffect(() => {
    // Filter the achievements based on the game search term, achievement search term, locked filter, and visibility filter
    const lowerCaseGameSearchTerm = gameSearchTerm.toLowerCase();
    const lowerCaseAchievementSearchTerm = achievementSearchTerm.toLowerCase();

    const newFilteredAchievements = achievements
      .filter((achievement) => achievement.game.name.toLowerCase().includes(lowerCaseGameSearchTerm))
      .filter(
        (achievement) =>
          achievement.name.toLowerCase().includes(lowerCaseAchievementSearchTerm) ||
          achievement.game.name.toLowerCase().includes(lowerCaseAchievementSearchTerm)
      )
      .filter((achievement) => {
        if (lockedFilter === null) return true;
        return achievement.locked === lockedFilter;
      })
      .filter((achievement) => {
        if (visibilityFilter === null) return true;
        return achievement.hidden === visibilityFilter;
      });

    // Sort the achievements based on the sort method
    if (sortMethod === 'globalUnlock') {
      newFilteredAchievements.sort((a, b) => a.unlockPercentage - b.unlockPercentage);
    } else if (sortMethod === 'unlockDate') {
      newFilteredAchievements.sort((a, b) => {
        const aUnlockDate = a.unlockDate || new Date(0);
        const bUnlockDate = b.unlockDate || new Date(0);
        return aUnlockDate - bUnlockDate;
      });
    }

    setFilteredAchievements(newFilteredAchievements);
  }, [gameSearchTerm, achievementSearchTerm, lockedFilter, visibilityFilter, sortMethod, achievements]);

  const handleGameSearchChange = (event) => {
    setGameSearchTerm(event.target.value);
  };

  const handleAchievementSearchChange = (event) => {
    setAchievementSearchTerm(event.target.value);
  };

  const handleLockedFilterChange = (event) => {
    const value = event.target.value === 'true' ? true : event.target.value === 'false' ? false : null;
    setLockedFilter(value);
  };

  const handleVisibilityFilterChange = (event) => {
    const value = event.target.value === 'true' ? true : event.target.value === 'false' ? false : null;
    setVisibilityFilter(value);
  };

  const handleSortMethodChange = (event) => {
    setSortMethod(event.target.value);
  };

  return (
    <div>
      <div className="achievements-page-header">
        <button className="back-button" onClick={handleViewAll}>
          <Image src="/icons/arrow-left.svg" alt="Back" width={30} height={30} />
        </button>
        <div className="search-container">
          <div className="search-input-container">
            <input
              className="search-input"
              type="text"
              placeholder="Sort by game"
              onChange={handleGameSearchChange}
              value={gameSearchTerm}
            />
          <Image src="/icons/magnifying-glass.svg" alt="Search icon" width={20} height={20} className="search-icon"/>
        </div>
          <div className="search-input-container">
            <input
              className="search-input"
              type="text"
              placeholder="Sort by achievement"
              onChange={handleAchievementSearchChange}
              value={achievementSearchTerm}
            />
            <Image src="/icons/magnifying-glass.svg" alt="Search icon" width={20} height={20} className="search-icon"/>
          </div>
        </div>
      </div>
        <div className="filter-container">
          <div className="filter-section">
            <Image
              src={lockedFilter ? "/icons/lock-closed.svg" : "/icons/lock-open.svg"}
              alt="Lock icon"
              width={30} height={30} className="filter-icon"
            />
            <select className="filter-select" onChange={handleLockedFilterChange} value={lockedFilter}>
              <option value={null}>All</option>
              <option value={true}>Locked</option>
              <option value={false}>Unlocked</option>
            </select>
          </div>
          <div className="filter-section">
            <Image
              src={visibilityFilter === null || visibilityFilter ? "/icons/visibility.svg" : "/icons/visibility-off.svg"}
              alt="Visibility Filter Icon"
              width={30} height={30} className="filter-icon"
              />
            <select className="filter-select" onChange={handleVisibilityFilterChange} value={visibilityFilter}>
              <option value={null}>All</option>
              <option value={true}>Visible</option>
              <option value={false}>Hidden</option>
            </select>
          </div>
          <div className="filter-section">
            <Image src="/icons/filter.svg" alt="Filter icon" width={30} height={30} className="filter-icon"/>
            <select className="filter-select" onChange={handleSortMethodChange} value={sortMethod}>
              <option value={null}>No Sort</option>
              <option value="globalUnlock">Global Unlocks</option>
              <option value="unlockDate">Unlock Date</option>
            </select>
          </div>
        </div>
      <div className="achievement-container">
        {filteredAchievements.map((achievement) => (
          <AchievementCard key={`${achievement.id}-${achievement.game.id}`} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}


export default AchievementContainer;