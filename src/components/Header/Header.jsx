import React, { useState, useEffect } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [isToggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${headerActive ? "active" : "not-active"}`}>
      <figure className="header__logo">
        {/* <img src={images.logo} alt="none" /> */}
        <figcaption>
          <h1>TatvaSoft</h1>
        </figcaption>
      </figure>
      <nav className={`header__nav ${isToggle ? "active" : ""}`}>
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <p
              onClick={() => setToggle(!isToggle)}
              className={`close-icon ${!isToggle ? "invisible" : "visible"}`}
            >
              X
            </p>
          </li>
          <li className="header__nav__list__item">
            <a
              href="#"
              className="header__nav__list__item__link"
              onClick={() => navigate("/")}
            >
              Home
            </a>
          </li>
          {/* <li className="header__nav__list__item">
            <a href="#" className="header__nav__list__item__link">
              About
            </a>
          </li> */}
          <li className="header__nav__list__item">
            <a
              href="#"
              className="header__nav__list__item__link"
              onClick={() => navigate("/books")}
            >
              Books
            </a>
          </li>
          <li className="header__nav__list__item">
            <span
              href="#"
              className="header__nav__list__item__link"
              id="logout-btn"
            >
              <Link to="/login">Logout</Link>
            </span>
          </li>
        </ul>
      </nav>
      <section
        className="header__toggle-bar"
        onClick={() => setToggle(!isToggle)}
      >
        <span className="bars"></span>
        <span className="bars"></span>
        <span className="bars"></span>
      </section>
    </header>
  );
};

export default Header;
