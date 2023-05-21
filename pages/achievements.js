
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Achievements.css';

export default function Achievements() {
  const username = 'Laenis';
  const overallAchievements = 122;
  const perfectGames = 5;

  return (
    <div className="container-fluid text-light py-3 achievements-container">
      <header className="d-flex rounded justify-content-between align-items-center header-bar">
        <div className="d-flex align-items-center">
        <div>
          <Image
            className="rounded user-picture"
            src="/laenis_full.jpg"
            alt="User Picture"
            width={90} // adjust as needed
            height={90} // adjust as needed
            />
            </div>
          <div className="text-center ml-3 username">
            <h1>{username}</h1>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="mr-5 achievement-card">
            <div className="achievement-text-container">
              <span className="achievement-text">Overall Achievements:</span>
              <span className="achievement-text">Perfect Games:</span>
            </div>
            <div className="achievement-number-container">
              <span className="achievement-number">{overallAchievements}</span>
              <span className="achievement-number">{perfectGames}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of the page... */}
    </div>
  );
}