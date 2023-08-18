import React from "react";
import "./Banner.css";
import bannerImg from "./../../images/images/promo-img.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <div className="banner__img">
          <img src={bannerImg} alt="Promo" />
        </div>
        <div className="banner__text-content">
          <h2 className="banner__title">
            <span className="banner__highlight">
              <span>PAYDAY </span>
            </span>
            SALE NOW
          </h2>
          <p className="banner__text">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p className="banner__text-two">1 June - 10 June 2021</p>
          <p className="banner__text-three">*Terms & Conditions apply</p>
          <button type="button" className="banner__btn">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
