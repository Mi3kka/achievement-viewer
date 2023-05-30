// GameCard.js

import Image from 'next/image';
import '../../styles/GameCard.css';

// The GameCard component takes in a game prop and an onClick prop to handle when the card is clicked and what game to pass to the onClick function
export default function GameCard({ game, onClick }) {

  // Calculate the completion percentage
  const completionPercentage = Math.floor((game.achievements.completed / game.achievements.total) * 100);

  // Calculate the color based on completion rate, using rgba to set the opacity lower.
  let percentageColor;
  if (completionPercentage <= 25) {
    percentageColor = "rgba(255,128,128,0.65)"; // Red
  } else if (completionPercentage <= 50) {
    percentageColor = "rgba(255,165,30,0.65)"; // Orange
  } else if (completionPercentage <= 75) {
    percentageColor = "rgba(255,255,80,0.65)"; // Yellow
  } else {
    percentageColor = "rgba(128,255,170,0.65)"; // Green
  }

  return (
    <div
      className="d-flex align-items-center bg-dark rounded px-3 py-2 mb-3 game-card"
      onClick={onClick}
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
      <div className="ms-auto achievement-info-container">
        {game.achievements.completed === game.achievements.total &&
          <div className="game-completion-check">
            <Image
              className="complete-check-img"
              src="/icons/complete-check.svg"
              alt="All achievements unlocked."
              width={45}
              height={45}
            />
          </div>
        }
        <div className="achievement-total-container" style={{backgroundColor: percentageColor}}>
          <span className="achievement-total">{completionPercentage}%</span>
        </div>
      </div>
    </div>
  );
}