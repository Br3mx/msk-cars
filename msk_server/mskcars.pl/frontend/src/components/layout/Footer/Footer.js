import React from "react";
import style from "./Footer.module.scss";
import { useSection } from "../../common/SectionContext";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const { section } = useSection();
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.nav}>
          <Link to="/about" className={style.link}>
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
          <Link to="/offer" className={style.link}>
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
            <a
              href="https://www.facebook.com/mskrally"
              target="_blank"
              className={style.link}
              rel="noopener noreferrer"
            >
              <FaFacebook className={style.icon} />
            </a>
            <a
              href="https://www.instagram.com/mskcars.pl/"
              target="_blank"
              className={style.link}
              rel="noopener noreferrer"
            >
              <FaInstagram className={style.icon1} />
            </a>
          </div>
        </div>
      </div>
      <div className={style.polrel}>
        <span>
          <Link to={"/policy"} className={style.link}>
            Polityka Prywatności
          </Link>
        </span>
        <span>
          <Link to={"/regulations"} className={style.link}>
            Regulamin
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
