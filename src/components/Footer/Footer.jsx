import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__header">
        <p className="footer__header__logo">TatvaSoft</p>
      </section>
      <section className="footer__content">
        <div className="footer__content__left">
          <div className="footer__content__left__items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Carrers</li>
              <li>Info</li>
              <li>Login/Register</li>
            </ul>
          </div>
          <div className="footer__content__left__links">
            <div className="footer__content__left__links__logos">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-plastilina/69/facebook--v2.png"
                alt="facebook--v2"
              />
            </div>
            <div className="footer__content__left__links__logos">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-plastilina/69/twitter--v1.png"
                alt="twitter--v1"
              />
            </div>
            <div className="footer__content__left__links__logos">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-plastilina/69/instagram-new--v2.png"
                alt="instagram-new--v2"
              />
            </div>
            <div className="footer__content__left__links__logos">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-plastilina/69/pinterest--v1.png"
                alt="pinterest--v1"
              />
            </div>
            <div className="footer__content__left__links__logos">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/youtube-play.png"
                alt="youtube-play"
              />
            </div>
          </div>
        </div>
        <div className="footer__content__right">
          <p>Checkout the latest books here by subscribing</p>
          <div>
            <input type="email" name="email" id="footer-email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
      <section className="footer__caption">
        <p className="footer__content__copyright-text">
          Copyright@ 2023 TatvaSoft. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
