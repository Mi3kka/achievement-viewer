// GameCard.js

import Image from 'next/image';
import '../../styles/GameCard.css';

// The GameCard component takes in a game prop and an onClick prop to handle when the card is clicked and what game to pass to the onClick function
export default function GameCard({ game, onClick }) {

  // Calculate the completion percentage
  const completionPercentage = Math.floor((game.achievements.completed / game.achievements.total) * 100);

 // Calculate the color based on completion rate, using rgba  to set the opacity lower
  let percentageColor;
  if (completionPercentage <= 20) {
    percentageColor = "rgba(255,128,128,0.5)";
  } else if (completionPercentage <= 40) {
    percentageColor = "rgba(255,204,128,0.5)";
  } else if (completionPercentage <= 60) {
    percentageColor = "rgba(255,255,128,0.5)";
  } else if (completionPercentage <= 80) {
    percentageColor = "rgba(204,255,128,0.5)";
  } else {
    percentageColor = "rgba(128,255,170,0.5)";
  }

  return (
    <div
      className="d-flex align-items-center bg-dark rounded px-3 py-2 mb-3 game-card"
      onClick={onClick} // When the card is clicked, call onClick and pass prop "game"
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
        {/* If the game has never been played, display "Never Played" */}
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