import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import hero1 from "../../public/img/hero-1.jpg";
import hero2 from "../../public/img/hero-2.jpg";
import hero3 from "../../public/img/hero-3.jpg";

export default function Hero() {
  //     const heroButtons = document.querySelector("[data-carousel-btns]")
  // function changeHeroImage {

  // }

  return (
    <section className="hero-main">
      <div className="hero-image-carousel">
        <button className="carousel-btn prev" data-carousel-btns>
          <FontAwesomeIcon
            icon="fa-solid fa-play"
            className="carousel-btn-prev-icon"
          />
        </button>
        <button className="carousel-btn next" data-carousel-btns>
          <FontAwesomeIcon
            icon="fa-solid fa-play"
            className="carousel-btn-next-icon"
          />
        </button>
        <ul>
          <li className="slide" data-active>
            <img src={hero1} alt="hero-image-1"></img>
          </li>
          <li className="slide">
            <img src={hero2} alt="hero-image-2"></img>
          </li>
          <li className="slide">
            <img src={hero3} alt="hero-image-3"></img>
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
