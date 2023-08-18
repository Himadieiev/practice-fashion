import React, { useState } from "react";
import "./Footer.css";
import fb from "./../../images/socials/fb.svg";
import inst from "./../../images/socials/inst.svg";
import tw from "./../../images/socials/tw.svg";
import ld from "./../../images/socials/in.svg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(null);

  const toggleBlock = (menuId) => {
    setIsVisible(menuId === isVisible ? null : menuId);
  };

  return (
    <section className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__content-left">
            <div className="footer__logo">
              <span>Fashion</span>
            </div>
            <p className="footer__text">
              Complete your style with awesome clothes from us.
            </p>
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a href="#!">
                  <img src={fb} alt="Facebook" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#!">
                  <img src={inst} alt="Instagram" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#!">
                  <img src={tw} alt="Twitter" />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#!">
                  <img src={ld} alt="Linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content-right">
            <div className="footer__btn-links">
              <button
                className="footer__btn"
                type="button"
                onClick={() => toggleBlock("menu1")}
              >
                Company
              </button>
              <div
                className={`footer__link-menu ${
                  isVisible === "menu1" ? "footer__link-menu--visible" : ""
                }`}
              >
                <ul className="footer__list-links">
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__btn-links">
              <button
                className="footer__btn"
                type="button"
                onClick={() => toggleBlock("menu2")}
              >
                Quick Link
              </button>
              <div
                className={`footer__link-menu ${
                  isVisible === "menu2" ? "footer__link-menu--visible" : ""
                }`}
              >
                <ul className="footer__list-links">
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      Share Location
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      Orders Tracking
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__btn-links">
              <button
                className="footer__btn"
                type="button"
                onClick={() => toggleBlock("menu3")}
              >
                Legal
              </button>
              <div
                className={`footer__link-menu ${
                  isVisible === "menu3" ? "footer__link-menu--visible" : ""
                }`}
              >
                <ul className="footer__list-links">
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      Terms & conditions
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="footer__btn-links-item">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
