import React from "react";
import "./Promo.css";
import promoImg from "./../../images/images/header-img.jpg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div>
            <h1 className="promo__title">
              <span className="highlight">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </h1>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <button type="button" className="promo__btn">
                Shop Now
              </button>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
