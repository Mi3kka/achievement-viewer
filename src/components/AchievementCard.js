// AchievementCard.js

import React from 'react';
import Image from 'next/image';
import '../../styles/AchievementCard.css';

function AchievementCard({ achievement, visibilityFilter }) {
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

  // Define a condition to decide whether to blur or not
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