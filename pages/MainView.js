// MainView.js

import { useState } from 'react';
import Image from 'next/image';
import GameCardContainer from '../src/components/GameCardContainer';
import { games } from '../dummy-data/GameData';
import AppFooter from '../app/AppFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainView.css';

// The MainView component is the main view of the app. It displays the user's profile picture, username, and overall achievement and perfect game counts.
// It houses the GameCardContainer component and handles the state change to the all achievements page.
export default function MainView() {

  // State variable for the clicked game name
  const  setSelectedGame = useState(null);

  // The username, overall achievement count, perfect game count, and profile picture are hardcoded for now
  const username = 'Laenis';
  const overallAchievements = 122;
  const perfectGames = 5;
  const picture = '/laenis_full.jpg';

  // Function to handle when a game card is clicked, sets the selected game name and passes it
  // to the GameCardContainer as props so that a filter can be applied to the achievements
  const handleGameCardClick = (selectedGame) => {
    setSelectedGame(selectedGame);
  }

  return (
    <div className="container-fluid text-light py-3 achievements-container">
      <header className="rounded d-flex rounded justify-content-between align-items-center header-bar">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center user-picture-container">
            <div className="user-picture">
              <Image
                src={picture}
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
        <GameCardContainer games={games} onGameCardClick={handleGameCardClick} /> {/* Pass the games and the selectedGame to GameCardContainer */}
      <AppFooter />
    </div>
  );
}