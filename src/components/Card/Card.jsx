import React from "react";
import "./Card.css";
import arrowImg from "./../../images/icons/arrow.svg";

const Card = ({ title, img }) => {
  return (
    <div className="card">
      <a href="#!" className="card__link">
        <img src={img} alt="Category" className="card__img" />
        <div className="card__body">
          <div>
            <div className="card__title">{title}</div>
            <div className="card__text">Explore Now!</div>
          </div>
          <div className="card__icon">
            <img src={arrowImg} alt="Open" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
