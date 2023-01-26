import React from "react";

import halalImage from "../assets/img/halal.png";

export default function Specials() {
  return (
    <section className="specials-section">
      <div className="specials--main-image">
        <img src={halalImage} alt="halal image header" />
      </div>
      <div className="specials--main-content-container">
        <div className="specials--vegetarian-content">
          <h5 className="specials--title">vegetarian</h5>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Bengan Bharta</h6>
            <p className="specials--menu-item-content">
              Roasted eggplant, mashed and sautéed with onions, garlic and
              simmered in tomato sauce. This one's an absolute must try! Chef's
              favorite
              <span className="specials--menu-item-price">$10.49</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Chana Masala</h6>
            <p className="specials--menu-item-content">
              Slow simmered chickpeas with ginger and garlic in a tomato & onion
              sauce
              <span className="specials--menu-item-price">$10.49</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Sabzi</h6>
            <p className="specials--menu-item-content">
              A medley of fresh vegetables stewed together with an assortment of
              exotic spices
              <span className="specials--menu-item-price">$10.49</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Paneer Tikka Masala</h6>
            <p className="specials--menu-item-content">
              Our signature, velvety tikka sauce with spiced tomatoes and paneer
              <span className="specials--menu-item-price">$10.49</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Palak Paneer</h6>
            <p className="specials--menu-item-content">
              Spinach slow- roasted with tender paneer cheese in mild green
              chili sauce with a touch of cream
              <span className="specials--menu-item-price">$10.49</span>
            </p>
          </div>
        </div>
        <div className="specials--chicken-content">
          <h5 className="specials--title">chicken</h5>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Chicken Tikka Masala</h6>
            <p className="specials--menu-item-content">
              Boneless chicken marinated in our homemade buttery cream sauce
              <span className="specials--menu-item-price">$12.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Chicken Saag</h6>
            <p className="specials--menu-item-content">
              Chicken dish simmered in spinach sauce
              <span className="specials--menu-item-price">$12.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Chicken Vindaloo</h6>
            <p className="specials--menu-item-content">
              Boneless chicken and potatoes simmered in a spicy red chili based
              gravy with herbs
              <span className="specials--menu-item-price">$12.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Karahi Chicken</h6>
            <p className="specials--menu-item-content">
              Boneless chicken stewed in our flavorful homemade onion based
              sauce
              <span className="specials--menu-item-price">$12.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Chicken Choley</h6>
            <p className="specials--menu-item-content">
              Boneless chicken mixed with soft garbanzo beans, tomatoes and
              gravy with herbs and spices
              <span className="specials--menu-item-price">$12.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Chicken Curry</h6>
            <p className="specials--menu-item-content">
              Boneless chicken cooked with ginger, garlic, and mild cream sauce
              <span className="specials--menu-item-price">$12.99</span>
            </p>
          </div>
        </div>
        <div className="specials--lamb-content">
          <h5 className="specials--title">lamb</h5>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Lamb Curry</h6>
            <p className="specials--menu-item-content">
              Lamb cooked in a traditional blend of curry spices
              <span className="specials--menu-item-price">$13.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Lamb Vindaloo </h6>
            <p className="specials--menu-item-content">
              Lamb marinated in garlic and vinegar, cooked in a red chili based
              tangy sauce
              <span className="specials--menu-item-price">$13.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Karahi Gosht</h6>
            <p className="specials--menu-item-content">
              Fresh cuts of marinated lamb stewed in our flavorful homemade
              sauce
              <span className="specials--menu-item-price">$13.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Saag Gosht</h6>
            <p className="specials--menu-item-content">
              Lamb cooked with onion, garlic, ginger, tomato and spinach
              <span className="specials--menu-item-price">$13.99</span>
            </p>
          </div>
          <div className="specials--menu-item">
            <h6 className="specials--menu-item-title">Nihari</h6>
            <p className="specials--menu-item-content">
              Our house specialty, Nihari is known for its rich texture and
              spice. Cuts of sirloin beef slowly cooked in a flavorful homemade
              sauce and garnished with jalapeños and ginger
              <span className="specials--menu-item-price">$13.99</span>
            </p>
          </div>
        </div>
      </div>
      <div className="specials--menu-button-container">
        <button className="specials--menu-button">
          <a href="menu.html" className="specials--menu-button-link">
            View Complete Menu
          </a>
        </button>
      </div>
    </section>
  );
}
