import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import hero1 from "../../public/img/hero-1.jpg";
import hero2 from "../../public/img/hero-2.jpg";
import hero3 from "../../public/img/hero-3.jpg";

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  console.log(currentSlideIndex);

  const slides = [hero1, hero2, hero3];

  function changeHeroImage(input) {
    console.log("clicked");
    if (input === "prev") {
      console.log("prev");
      if (currentSlideIndex === 0) {
        return setCurrentSlideIndex(slides.length - 1);
      }
      return setCurrentSlideIndex(currentSlideIndex - 1);
    } else if (input === "next") {
      console.log("next");
      if (currentSlideIndex === slides.length - 1) {
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
        <ul>
          <li className="slide">
            <img
              src={slides[currentSlideIndex]}
              alt={`hero-image-${slides[currentSlideIndex]}`}
            ></img>
          </li>
        </ul>
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
