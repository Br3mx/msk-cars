import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSection } from "../../common/SectionContext";
import style from "./NavBar.module.scss";

const NavBar = () => {
  const { section } = useSection();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div
            className={`${style.hamburger} ${menuOpen ? style.open : ""}`}
            onClick={toggleMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <nav className={menuOpen ? style.open : ""}>
            <Link
              to={
                section === "detailing"
                  ? "/home-detaling"
                  : "/home-cars-to-order"
              }
              className={
                isActive(
                  section === "detailing"
                    ? "/home-detaling"
                    : "/home-cars-to-order"
                )
                  ? style.activeLink
                  : style.link
              }
            >
              <FaHome />
            </Link>
            <Link
              to="/about"
              className={isActive("/about") ? style.activeLink : style.link}
            >
              O NAS
            </Link>
            <Link
              to={
                section === "detailing"
                  ? "/realization-detaling"
                  : "/realization-cars-to-order"
              }
              className={
                isActive(
                  section === "detailing"
                    ? "/realization-detaling"
                    : "/realization-cars-to-order"
                )
                  ? style.activeLink
                  : style.link
              }
            >
              REALIZACJE
            </Link>
            <div className={style.contLogo}>
              <Link to="/" className={style.logo}>
                <img src="/img/logo.png" alt="logo" />
              </Link>
            </div>
            <Link
              to="/offer"
              className={isActive("/offer") ? style.activeLink : style.link}
            >
              OFERTA
            </Link>
            <Link
              to="/contact"
              className={isActive("/contact") ? style.activeLink : style.link}
            >
              KONTAKT
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
