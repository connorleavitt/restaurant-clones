import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list-icon">
          <FontAwesomeIcon
            icon="fa-brands fa-twitter"
            className="footer-icon"
          />
        </li>
        <li className="footer-list-icon">
          <FontAwesomeIcon
            icon="fa-brands fa-facebook-f"
            className="footer-icon"
          />
        </li>
        <li className="footer-list-icon">
          <FontAwesomeIcon
            icon="fa-brands fa-pinterest"
            className="footer-icon"
          />
        </li>
        <li className="footer-list-icon">
          <FontAwesomeIcon
            icon="fa-brands fa-google-plus-g"
            className="footer-icon"
          />
        </li>
      </ul>
    </footer>
  );
}
