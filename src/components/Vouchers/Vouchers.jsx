import React from "react";
import "./Vouchers.css";
import vouchersImg from "./../../images/images/vouchers-img.png";
import apple from "./../../images/icons/app-store.png";
import google from "./../../images/icons/google-play.png";

const Vouchers = () => {
  return (
    <section className="vouchers">
      <div className="container">
        <div className="vouchers__content">
          <div>
            <h2 className="vouchers__title">DOWNLOAD APP & GET THE VOUCHER!</h2>
            <p className="vouchers__desc">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <div className="vouchers__link-wrapper">
              <a href="#!" className="vouchers__link">
                <img src={apple} alt="App store" />
              </a>
              <a href="#!" className="vouchers__link">
                <img src={google} alt="Google play" />
              </a>
            </div>
          </div>
          <div className="vouchers__img">
            <img src={vouchersImg} alt="Vouchers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vouchers;
