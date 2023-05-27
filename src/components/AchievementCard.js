import Image from 'next/image';
import '../../styles/AchievementCard.css';

export default function AchievementCard({ achievement }) {
  const { name, game, completed, total, unlockedDate, locked } = achievement;

  const unlockPercentage = ((completed / total) * 100).toFixed(2);

  return (
    <div className="d-flex align-items-center bg-dark rounded px-3 py-2 mb-3 achievement-card">
      <div className="achievement-image-container">
        <Image
          className="achievement-image"
          src={achievement.image}
          alt={name}
          width={50}
          height={50}
        />
      </div>
      <div className="ms-3 achievement-details">
        <h5 className="achievement-name">{name}</h5>
        <p className="game-name">{game.name}</p>
        <div className="achievement-progress">
          {locked ? (
            <p className="achievement-status">Locked</p>
          ) : (
            <p className="achievement-date">Unlocked on {unlockedDate}</p>
          )}
          <p className="achievement-percentage">{unlockPercentage}% completed</p>
        </div>
      </div>
      <div className="ms-auto achievement-game-image-container">
        <Image
          className="game-img"
          src={game.image}
          alt={game.name}
          width={50}
          height={50}
        />
      </div>
      <div className="achievement-global-percentage">
        <p>{unlockPercentage}%</p>
      </div>
    </div>
  );
}