// AppFooter.js

import React from 'react';
import '../styles/AppFooter.css';

// The AppFooter component is a simple footer that displays the current year and the app name. Used in the main view.
const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer-content">
        <p>&copy; 2023 Achievement Viewer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default AppFooter;