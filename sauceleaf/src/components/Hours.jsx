import React from "react";

import columnDivider from "../assets/img/column-divider_orange.png";
import timetableDecorator from "../assets/img/timetable-decorator_orange.png";
import timetableDecorator2 from "../assets/img/timetable-decorator2_orange.png";

export default function Hours() {
  return (
    <section className="hours-section">
      <div className="hours--title">
        <h3 className="hours--title-text">Opening Hours</h3>
      </div>
      <div className="hours--subtitle">
        <h5 className="hours--subtitle-text">Call for Reservations</h5>
      </div>
      <div className="hours--main-content">
        <div className="hours--main-content-side">
          <h4 className="hours--main-content-header">Sunday to Tuesday</h4>
          <div className="hours--main-content-info">09:00</div>
          <div className="hours--main-content-info">24:00</div>
        </div>
        <div className="hours--main-content-divider">
          <img src={columnDivider} alt="column divider" />
        </div>
        <div className="hours--main-content-side">
          <h4 className="hours--main-content-header">Tuesday to Sunday</h4>
          <div className="hours--main-content-info">11:00 - 15:00</div>
          <div className="hours--main-content-info">16:45 - 22:00</div>
        </div>
      </div>
      <div className="hours--subtitle2">
        <h5 className="hours--subtitle-text2">
          RESERVATION NUMBER: 415-440-4293
        </h5>
      </div>
    </section>
  );
}
