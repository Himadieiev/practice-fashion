import React from "react";
import "./Community.css";

const Community = () => {
  return (
    <section className="community">
      <div className="container">
        <h2 className="community__title">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h2>
        <p className="community__text">
          Type your email down below and be young wild generation
        </p>
        <div className="community__input-container">
          <input
            type="email"
            className="community__input"
            placeholder="Add your email here"
          />
          <button type="submit" className="community__btn">
            SEND
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
