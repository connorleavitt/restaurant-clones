import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="about-section">
      <div className="next-section-btn-container">
        <button onClick={executeScroll} className="next-section-btn">
          <FontAwesomeIcon
            icon="fa-solid fa-play"
            className="next-section-btn-icon"
          />
        </button>
      </div>
      <section className="about-main" ref={myRef}>
        ABOUT
      </section>
    </div>
  );
}
