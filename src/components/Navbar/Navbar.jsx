import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <a href="#main" className="navbar__logo" onClick={closeMenu}>
        THE TOMATO
      </a>
      <div className="navbar__icon" onClick={() => setClick(!click)}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "navbar__menu active" : "navbar__menu"}>
        <li className="navbar__menu-item">
          <a href="#main" className="navbar__links" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li className="navbar__menu-item">
          <a href="#newsletter" className="navbar__links" onClick={closeMenu}>
            Subscribe
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
