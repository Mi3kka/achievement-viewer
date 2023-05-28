// GameCard.js
import Image from 'next/image';
import '../../styles/GameCard.css';

export default function GameCard({ game, onClick }) {
  const completionPercentage = Math.floor((game.achievements.completed / game.achievements.total) * 100);

  // Calculate the color based on completion rate
  let percentageColor;
  if (completionPercentage <= 20) {
    percentageColor = "#ff8080";
  } else if (completionPercentage <= 40) {
    percentageColor = "#ffcc80";
  } else if (completionPercentage <= 60) {
    percentageColor = "#ffff80";
  } else if (completionPercentage <= 80) {
    percentageColor = "#ccff80";
  } else {
    percentageColor = "#80ffaa";
  }

  return (
    <div
      className="d-flex align-items-center bg-dark rounded px-3 py-2 mb-3 game-card"
      onClick={onClick} // This calls the function passed in as the onClick prop
    >
      <Image
        className="game-img"
        src={game.image}
        alt={game.name}
        width={50}
        height={50}
      />
      <div className="ms-3 game-text-container">
        <h5 className="game-name">{game.name}</h5>
        <p className="game-achievement">{game.achievements.completed} / {game.achievements.total}</p>
        <p className="last-played">{game.lastPlayed ? `Last Played: ${game.lastPlayed.toISOString().slice(0,10)}` : 'Never Played'}</p>
      </div>
      <div className="ms-auto achievement-total-container" style={{backgroundColor: percentageColor}}>
        <span className="achievement-total">{completionPercentage}%</span>
      </div>
      {game.achievements.completed === game.achievements.total &&
        <div className="ms-2 game-trophy">
          <Image
            className="trophy-img"
            src="/trophy.svg"
            alt="All achievements unlocked"
            width={20}
            height={20}
          />
        </div>
      }
    </div>
  );
}