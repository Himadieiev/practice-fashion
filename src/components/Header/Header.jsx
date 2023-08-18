import React from "react";
import logoImg from "./../../images/icons/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="Logo" />
            <span>Fashion</span>
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li>
                <a className="header__navlink" href="#!">
                  CATALOGUE
                </a>
              </li>
              <li>
                <a className="header__navlink" href="#!">
                  FASHION
                </a>
              </li>
              <li>
                <a className="header__navlink" href="#!">
                  FAVOURITE
                </a>
              </li>
              <li>
                <a className="header__navlink" href="#!">
                  LIFESTYLE
                </a>
              </li>
            </ul>
          </nav>
          <button type="button" className="header__nav-btn">
            SIGN UP
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
