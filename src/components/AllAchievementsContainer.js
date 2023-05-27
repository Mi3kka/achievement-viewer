import { useState, useEffect } from 'react';
import { games } from '../../dummy-data/GameData';
import AchievementCard from '../components/AchievementCard';
import '../../styles/AchievementsContainer.css';

function AllAchievementsContainer({ handleViewAll }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [lockedFilter, setLockedFilter] = useState(null);
  const [visibilityFilter, setVisibilityFilter] = useState(null);
  const [sortMethod, setSortMethod] = useState(null);
  const [filteredAchievements, setFilteredAchievements] = useState([]);

  const achievements = games.reduce(
    (acc, game) => [...acc, ...game.achievementsList.map((achievement) => ({ ...achievement, game }))],
    []
  );

  useEffect(() => {
    // Filter the achievements based on the search term
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const newFilteredAchievements = achievements.filter(
      (achievement) =>
        achievement.name.toLowerCase().includes(lowerCaseSearchTerm) || // Check if the achievement name matches the search term
        achievement.game.name.toLowerCase().includes(lowerCaseSearchTerm) // Check if the game name matches the search term
    );

    setFilteredAchievements(newFilteredAchievements);
  }, [searchTerm, achievements]); // Add `achievements` as a dependency

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLockedFilterChange = (event) => {
    setLockedFilter(event.target.value);
    // Implement locked/unlocked filter logic here
  };

  const handleVisibilityFilterChange = (event) => {
    setVisibilityFilter(event.target.value);
    // Implement visibility on/off filter logic here
  };

  const handleSortMethodChange = (event) => {
    setSortMethod(event.target.value);
    // Implement sort logic here
  };

  return (
    <div>
      <button onClick={handleViewAll}>Back</button>
      <input type="text" placeholder="Search..." onChange={handleSearchChange} value={searchTerm} />
      <select onChange={handleLockedFilterChange} value={lockedFilter}>
        <option value={null}>All</option>
        <option value={true}>Locked</option>
        <option value={false}>Unlocked</option>
      </select>
      <select onChange={handleVisibilityFilterChange} value={visibilityFilter}>
        <option value={null}>All</option>
        <option value={true}>Visible</option>
        <option value={false}>Hidden</option>
      </select>
      <select onChange={handleSortMethodChange} value={sortMethod}>
        <option value={null}>No Sort</option>
        <option value="globalUnlock">Global Unlocks</option>
        <option value="unlockDate">Unlock Date</option>
      </select>
      <div className="achievement-container" style={{ overflowY: 'scroll', maxHeight: '80vh' }}>
        {filteredAchievements.map((achievement) => (
          <AchievementCard key={`${achievement.id}-${achievement.game.id}`} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}

export default AllAchievementsContainer;