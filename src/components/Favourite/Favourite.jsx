import React from "react";
import "./Favourite.css";
import promo01Img from "./../../images/images/promo-01.jpg";
import promo02Img from "./../../images/images/promo-02.jpg";
import Card from "../Card/Card";

const Favourite = () => {
  return (
    <section className="favourite">
      <div className="container">
        <div className="favourite__header">
          <h2 className="title">Young’s Favourite</h2>
        </div>
        <div className="favourite__cards">
          <Card title="Trending on instagram" img={promo01Img} />
          <Card title="All Under $40" img={promo02Img} />
        </div>
      </div>
    </section>
  );
};

export default Favourite;
