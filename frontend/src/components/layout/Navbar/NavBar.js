import React from "react";
import style from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSection } from "../../common/SectionContext";
const NavBar = () => {
  const { section } = useSection();
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <Link
            to={
              section === "detailing"
                ? "/about-detaling"
                : "/about-cars-to-order"
            }
            className={style.link}
          >
            O NAS
          </Link>
          <Link
            to={
              section === "detailing"
                ? "/realization-detaling"
                : "/realization-cars-to-order"
            }
            className={style.link}
          >
            REALIZACJE
          </Link>
          <Link to={"/"} className={style.logo}>
            <img src="/img/logo.png" alt="logo" />
          </Link>

          <Link
            to={
              section === "detailing"
                ? "/offer-detaling"
                : "/offer-cars-to-order"
            }
            className={style.link}
          >
            OFERTA
          </Link>
          <Link to={"/contact"} className={style.link}>
            KONTAKT
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
