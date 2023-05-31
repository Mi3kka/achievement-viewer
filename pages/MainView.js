// MainView.js

import { useState } from 'react';
import Image from 'next/image';
import GameCardContainer from '../src/components/GameCardContainer';
import { games } from '../dummy-data/GameData';
import AppFooter from '../app/AppFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainView.css';
import Head from 'next/head';

// The MainView component is the main view of the app. It displays the user's profile picture, username, and overall achievement and perfect game counts.
// It houses the GameCardContainer component and handles the state change to the all achievements page.
export default function MainView() {

  // State variable for the clicked game name
  const  setSelectedGame = useState(null);

  // The username, overall achievement count, perfect game count, and profile picture are hardcoded for now
  const username = 'Test User';
  const overallAchievements = 376;
  const perfectGames = 1;
  const picture = '/profile_image_placeholder.jpg';

  // Function to handle when a game card is clicked, sets the selected game name and passes it
  // to the GameCardContainer as props so that a filter can be applied to the achievements
  const handleGameCardClick = (selectedGame) => {
    setSelectedGame(selectedGame);
  }

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="container-fluid text-light py-3 achievements-container"></div>
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
    </>
  );
}