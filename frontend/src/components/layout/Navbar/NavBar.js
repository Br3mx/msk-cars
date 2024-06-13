import React from "react";
import style from "./NavBar.module.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <Link to={"/about"} className={style.link}>
            O NAS
          </Link>
          <Link to={"/realization"} className={style.link}>
            REALIZACJE
          </Link>
          <Link to={"/"} className={style.logo}>
            <img src="/img/logo.png" alt="logo" />
          </Link>
          <Link to={"/offer"} className={style.link}>
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
