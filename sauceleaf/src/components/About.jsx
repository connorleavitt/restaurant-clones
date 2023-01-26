import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

import ornament from "../../public/img/ornament.png";
import aboutHeaderDecorator from "../../public/img/header_decorator_orange.png";

import {
  aboutSlider1Data,
  aboutSlider2Data,
} from "../components/AboutSliderData";

export default function About() {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  const [currentSlideIndex1, setCurrentSlideIndex1] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);

  // About slider 1 transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlideIndex1 === aboutSlider1Data.length - 1) {
        return setCurrentSlideIndex1(0);
      }
      return setCurrentSlideIndex1(currentSlideIndex1 + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlideIndex1]);

  // About slider 2 transition
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlideIndex2 === aboutSlider2Data.length - 1) {
        return setCurrentSlideIndex2(0);
      }
      return setCurrentSlideIndex2(currentSlideIndex2 + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlideIndex2]);

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
        <div className="about--header-text">
          <h2 className="about--header-text-content">About Us</h2>
        </div>
        <div className="about--header-subtext">
          <p className="about--header-subtext-content">
            We love restaurants as much as you do. That's why we've been helping
            them fill tables since 1999. Welcome to Curryleaf restaurant.
          </p>
        </div>
        <div className="about--main-content">
          <div className="top-left">
            <h3 className="about--main-content-header">The History</h3>
            <p className="about--main-content-text">
              The <span>History of Kitchens</span> and Cooks gives further
              intimation on Mr Boulanger usual menu, stating confidently that
              "Boulanger served salted poultry and fresh eggs, all presented
              without a tablecloth on small marble tables". Numerous
              commentators have also referred to the supposed restaurant owner's
              eccentric habit of touting for custom outside his establishment,
              dressed in aristocratic fashion and brandishing a sword
            </p>
            <p className="about--main-content-text">
              According to Miss Spang, there is not a shred of evidence for any
              of it. She said: These legends just get passed on by hearsay and
              then spiral out of control. Her interest in <span>Boulanger</span>{" "}
              dates back to a history of food seminar in Paris in the mid-1990s
            </p>
            <div className="about--main-content-break">
              <img src={ornament} alt="content seperator"></img>
            </div>
          </div>
          <div className="top-right">
            <div className="about--slider1-image-container">
              {aboutSlider1Data.map((slide, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index === currentSlideIndex1
                        ? "about-slide active"
                        : "about-slide"
                    }
                  >
                    <img
                      src={slide}
                      alt={`about--slider1-image-${index}`}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bottom-left">
            <div className="about--slider1-image-container">
              {aboutSlider2Data.map((slide, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index === currentSlideIndex2
                        ? "about-slide active"
                        : "about-slide"
                    }
                  >
                    <img
                      src={slide}
                      alt={`about--slider2-image-${index}`}
                    ></img>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bottom-right">
            <p className="about--main-content-text">
              The <span>History of Kitchens</span> and Cooks gives further
              intimation on Mr Boulanger usual menu, stating confidently that
              "Boulanger served salted poultry and fresh eggs, all presented
              without a tablecloth on small marble tables". Numerous
              commentators have also referred to the supposed restaurant owner's
              eccentric habit of touting for custom outside his establishment,
              dressed in aristocratic fashion and brandishing a sword
            </p>
            <p className="about--main-content-text">
              According to Miss Spang, there is not a shred of evidence for any
              of it. She said: These legends just get passed on by hearsay and
              then spiral out of control. Her interest in <span>Boulanger</span>{" "}
              dates back to a history of food seminar in Paris in the mid-1990s
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
