import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">sauceLEAF🍁</div>
      <div className="navbar-list-container">
        <ul className="navbar-list">
          <li className="navbar-list-item">Home</li>
          <li className="navbar-list-item">About</li>
          <li className="navbar-list-item">Menu</li>
          <li className="navbar-list-item">Gallery</li>
          <li className="navbar-list-item">Location</li>
        </ul>
      </div>
    </nav>
  );
}
