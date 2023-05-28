// GameCard.js
import Image from 'next/image';
import '../../styles/GameCard.css';

export default function GameCard({ game }) {
  return (
    <a href={`/games/${game.id}`} className="text-decoration-none text-light">
      <div className="d-flex align-items-center bg-dark rounded px-3 py-2 mb-3 game-card">
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
        <div className="ms-auto achievement-total-container">
          <span className="achievement-total">{game.achievements.total}</span>
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
    </a>
  );
}