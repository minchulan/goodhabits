import React from 'react';

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <header>
      <h1>Good Habits</h1>
      <h2>Rx Drug Finder</h2>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle-dark-mode"
          checked={isDarkMode}
          onChange={(e) => onToggleDarkMode(e.target.checked)}
        />
        <label htmlFor="toggle-dark-mode"></label>
      </div>
    </header>
  );
}

export default Header;