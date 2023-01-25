import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-list-container">
        <ul className="footer-list">
          <li className="footer-list-icon">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </li>
          <li className="footer-list-icon">FB LOGO</li>
          <li className="footer-list-icon">Menu</li>
          <li className="footer-list-icon">Gallery</li>
        </ul>
      </div>
    </div>
  );
}
