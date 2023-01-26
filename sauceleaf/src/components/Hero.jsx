import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { heroSliderData, heroHeaderTextData } from "./HeroSliderData";

import slideSeperator from "../assets/img/slide-separator-orange.png";

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentHeaderTextIndex, setCurrentHeaderTextIndex] = useState(0);

  function changeHeroImage(input) {
    if (input === "prev") {
      if (currentSlideIndex === 0) {
        return setCurrentSlideIndex(heroSliderData.length - 1);
      }
      return setCurrentSlideIndex(currentSlideIndex - 1);
    } else if (input === "next") {
      if (currentSlideIndex === heroSliderData.length - 1) {
        return setCurrentSlideIndex(0);
      }
      return setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  // Hero image transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlideIndex === heroSliderData.length - 1) {
        return setCurrentSlideIndex(0);
      }
      return setCurrentSlideIndex(currentSlideIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  // Header text transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentHeaderTextIndex === heroHeaderTextData.length - 1) {
        return setCurrentHeaderTextIndex(0);
      }
      return setCurrentHeaderTextIndex(currentHeaderTextIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentHeaderTextIndex]);

  return (
    <section className="hero-main">
      <div className="hero-image-carousel">
        <button
          onClick={() => {
            changeHeroImage("prev");
          }}
          className="carousel-btn prev"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-play"
            className="carousel-btn-prev-icon"
          />
        </button>
        <button
          className="carousel-btn next"
          onClick={() => {
            changeHeroImage("next");
          }}
        >
          <FontAwesomeIcon
            icon="fa-solid fa-play"
            className="carousel-btn-next-icon"
          />
        </button>
        <div className="hero-image-container">
          {heroSliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === currentSlideIndex ? "slide active" : "slide"
                }
              >
                <img src={slide} alt={`hero-image-${index}`}></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-logo">
          <h1 className="hero-logo-text">sauceLEAF 🍁</h1>
        </div>
        <div className="hero-title-container">
          {heroHeaderTextData.map((text, index) => {
            return (
              <div
                key={index}
                className={
                  index === currentHeaderTextIndex
                    ? "header-text active"
                    : "header-text"
                }
              >
                <h1 className="hero-title-text">{text}</h1>
              </div>
            );
          })}
        </div>
        <div className="hero-break">
          <img src={slideSeperator} alt="slide seperator"></img>
        </div>
        <div className="hero-subtext">
          <p className="hero-subtext-content">
            We serve only Zabihah Halal in our menu
          </p>
        </div>
      </div>
    </section>
  );
}

// takes us rest of screen height - navbar (no matter size)
// transitions through background images (with slider option) and header text
// superimposed logo ontop of hero
// fancy line break under header text
// static subtext
// dynamic down button at bottom to bring to next section (about) (hard jump, not smooth)
