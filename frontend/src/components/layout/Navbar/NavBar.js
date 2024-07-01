import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSection } from "../../common/SectionContext";
import style from "./NavBar.module.scss";

const NavBar = () => {
  const { section } = useSection();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <nav>
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
              to={
                section === "detailing"
                  ? "/about-detaling"
                  : "/about-cars-to-order"
              }
              className={
                isActive(
                  section === "detailing"
                    ? "/about-detaling"
                    : "/about-cars-to-order"
                )
                  ? style.activeLink
                  : style.link
              }
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
              to={
                section === "detailing"
                  ? "/offer-detaling"
                  : "/offer-cars-to-order"
              }
              className={
                isActive(
                  section === "detailing"
                    ? "/offer-detaling"
                    : "/offer-cars-to-order"
                )
                  ? style.activeLink
                  : style.link
              }
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
