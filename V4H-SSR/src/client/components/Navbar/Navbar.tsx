import React, { useEffect, useRef, useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import logo from "../../media/assets/picturesV4H/newLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const { pathname } = useLocation();

  return (
    <div
      className={
        location.pathname === "/advertising" || location.pathname === "/marketing"
          ? styles.advertisingHeader
          : styles.header
      }
    >
      <div className={styles.headerContainer}>
        <HashLink className={styles.logoDiv} to="/">
          <img src={logo} alt="/" />
        </HashLink>

        <nav className={isMenuOpen ? styles.responsiveNavbar : " "}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">IT Services</a>
            </li>
            <li>
              <a href="/marketing">Digital Marketing</a>
            </li>
            <li>
              <a href="/advertising">Outdoor Advertising</a>
            </li>
          </ul>

          <div className={styles.sectionNav}>
            <button>Get in touch</button>
          </div>
        </nav>

        {isMenuOpen ? (
          <FaTimes className={styles.hamburger} onClick={handleOnClick} />
        ) : (
          <FaBars className={styles.hamburger} onClick={handleOnClick} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
