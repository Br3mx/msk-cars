import React from "react";
import style from "./Footer.module.scss";
import { useSection } from "../../common/SectionContext";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  const { section } = useSection();
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.nav}>
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
        <div className={style.contentCopyright}>
          <div className={style.logo}>
            <img src="/img/logo.png" alt="logo" />
          </div>
          <div className={style.copyright}>
            <p>© 2024 MSK CARS</p>
          </div>
        </div>
        <div className={style.contentSocial}>
          <p>Sprawdź nasze sociale:</p>
          <div className={style.social}>
            <Link to={"/"} className={style.link}>
              <FaFacebook className={style.icon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
