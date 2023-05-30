// AchievementCard.js

import React from 'react';
import Image from 'next/image';
import '../../styles/AchievementCard.css';

// The AchievementCard component takes in an achievement prop for the achievement data and a visibilityFilter prop for the blur status
function AchievementCard({ achievement, visibilityFilter }) {

  // The data structure of the achievement card is as follows. This creates a card with the game image, game name, achievement name, achievement description, achievement status, and global unlock percentage
  const {
    name,
    game,
    description,
    locked,
    unlockDate,
    hidden,
    image,
    unlockPercentage
  } = achievement;

  // Define a variable for the blur condition
  const shouldBlur = hidden && visibilityFilter !== true && locked;

  return (
    <div className={`d-flex justify-content-between align-items-center bg-dark rounded px-3 py-2 mb-3 achievement-card ${locked ? 'locked' : 'unlocked'} ${shouldBlur ? 'hidden' : ''}`}>
      <Image
        className={`achievement-img ${shouldBlur ? 'hidden' : ''}`}
        src={image}
        alt={`${name} achievement`}
        width={50}
        height={50}
      />
      <div className={`achievement-text-container ${shouldBlur ? 'hidden' : ''}`}>
        <h4 className="achievement-game-name">{game.name}</h4>
        <h5 className="achievement-name">{name} {hidden ? '(Hidden)' : ''}</h5>
        <p className="achievement-description">{description}</p>
      </div>
      <div className={`achievement-status-container ${shouldBlur ? 'hidden' : ''}`}>
        <p className="achievement-status">{locked ? 'Locked' : `Unlocked: ${unlockDate ? unlockDate.toISOString().slice(0,10) : ''}`}</p>
        <p className="achievement-unlock-percentage">Global unlocks: {unlockPercentage}%</p>
      </div>
    </div>
  );
}

export default AchievementCard;