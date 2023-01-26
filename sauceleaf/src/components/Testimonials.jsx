import React, { useState } from "react";

import testimonialsLogo from "../assets/img/testimonials_logo_orange.png";
import { testimonialsTextData } from "./TestimonialsData";

export default function Testimonials() {
  const [currentTestimonialTextIndex, setCurrentTestimonialTextIndex] =
    useState(0);

  function changeTestimonial(input) {
    return setCurrentTestimonialTextIndex(input);
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials--main-image">
        <img src={testimonialsLogo} alt="testimonials image header" />
      </div>
      <div className="testimonials--main">
        <div className="testimonials--main-header-container">
          <h4 className="testimonials--main-header">Yelp Testimonials</h4>
        </div>
        <div className="testimonials--main-content-container">
          {testimonialsTextData.map((content, contentIndex) => {
            return (
              <div
                key={contentIndex}
                className={
                  contentIndex === currentTestimonialTextIndex
                    ? "testimonials--main-content active"
                    : "testimonials--main-content"
                }
              >
                <p className="testimonials--main-content-text">
                  {content.content}
                </p>
                <span className="testimonials--main-content-author">
                  - {content.author}
                </span>
              </div>
            );
          })}
        </div>
        <div className="testimonials--buttons-container">
          <div className="testimonials--buttons">
            {testimonialsTextData.map((content, contentIndex) => {
              return (
                <div
                  key={contentIndex}
                  onClick={() => changeTestimonial(contentIndex)}
                  className={
                    contentIndex === currentTestimonialTextIndex
                      ? "testimonials--button active"
                      : "testimonials--button"
                  }
                >
                  <input type="radio" name="radio" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
