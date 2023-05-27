import React from 'react';
import Image from 'next/image';
import '../../styles/AchievementCard.css';

function AchievementCard({ achievement }) {
  const {
    name,
    description,
    locked,
    unlockDate,
    hidden,
    image,
    unlockPercentage
  } = achievement;

  return (
    <div className={`d-flex align-items-center bg-dark rounded px-3 py-2 mb-3 achievement-card ${locked ? 'locked' : 'unlocked'} ${hidden ? 'hidden' : ''}`}>
      <Image
        className="achievement-img"
        src={image}
        alt={`${name} achievement`}
        width={50}
        height={50}
      />
      <div className="ms-3 achievement-text-container">
        <h5 className="achievement-name">{name}</h5>
        <p className="achievement-description">{description}</p>
        <p className="achievement-status">{locked ? 'Locked' : `Unlocked on ${unlockDate ? unlockDate.toISOString().slice(0,10) : ''}`}</p>
        <p className="achievement-unlock-percentage">Global Unlock Percentage: {unlockPercentage}%</p>
      </div>
    </div>
  );
}

export default AchievementCard;