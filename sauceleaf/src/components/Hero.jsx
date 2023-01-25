import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { heroSliderData } from "./HeroSliderData";

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
    </section>
  );
}

// takes us rest of screen height - navbar (no matter size)
// transitions through background images (with slider option) and header text
// superimposed logo ontop of hero
// fancy line break under header text
// static subtext
// dynamic down button at bottom to bring to next section (about) (hard jump, not smooth)
