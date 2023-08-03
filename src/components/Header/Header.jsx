import React from "react";
import './header.css';
import images from "../../constants/images";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <figure className="header__logo">
        {/* <img src={images.logo} alt="none" /> */}
        <figcaption>
          <h1>TatvaSoft</h1>
        </figcaption>
      </figure>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <a href="#" className="header__nav__list__item__link">
              Home
            </a>
          </li>
          <li className="header__nav__list__item">
            <a href="#" className="header__nav__list__item__link">
              About
            </a>
          </li>
          <li className="header__nav__list__item">
            <a href="#" className="header__nav__list__item__link">
              Books
            </a>
          </li>
          <li className="header__nav__list__item">
            <a href="#" className="header__nav__list__item__link">
              <Link to="/login">Logout</Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
