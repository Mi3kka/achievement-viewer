import Image from 'next/image';
import AchievementsContainer from '../src/components/AchievementsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AchievementsPage.css';
import { games } from '../dummy-data/GameData';

export default function Achievements() {
  const username = 'Laenis';
  const overallAchievements = 122;
  const perfectGames = 5;

  return (
    <div className="container-fluid text-light py-3 achievements-container">
      <header className="rounded d-flex rounded justify-content-between align-items-center header-bar">
        <div className="d-flex align-items-center">
          <div div className="d-flex align-items-center user-picture-container">
            <div className="user-picture">
              <Image
                src="/laenis_full.jpg"
                alt="User Picture"
                width={80}
                height={80}
                />
              </div>
            </div>
          <div className="text-center ml-2 username">
            <div>{username}</div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="mr-5 achievement-header">
            <div className="achievement-text-container">
              <span className="achievement-text">🏆 All Achievements:</span>
              <span className="achievement-text">🎮 Perfect Games:</span>
            </div>
            <div className="achievement-number-container">
              <span className="achievement-number">{overallAchievements}</span>
              <span className="achievement-number">{perfectGames}</span>
            </div>
          </div>
        </div>
      </header>
      <AchievementsContainer games={games} />
    </div>
  );
}