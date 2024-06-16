import React from "react";
import style from "./FirstSection.module.scss";
import { FaArrowAltCircleDown, FaArrowRight, FaPhone } from "react-icons/fa";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
const FirstSection = () => {
  return (
    <div className={style.container} id="firstsectiondetaling">
      <Container>
        <div className={style.content}>
          <div className={style.contText}>
            <h5>ODKRYJ PERFEKCJĘ TWOJEGO SAMOCHODU!</h5>
            <p>
              Profesjonalny autodetaling na <br />
              <span>NAJWYŻSZYM POZIOMIE!</span>
            </p>
          </div>
          <div className={style.contPhones}>
            <div className={style.contPhone}>
              <span>
                <a href="tel:+48533073301">
                  <FaPhone className={style.phoneIcon} />
                  (+48) 533-073-301
                </a>
              </span>
            </div>
            <div className={style.contPhone}>
              <span>
                <a href="tel:+48504598563">
                  <FaPhone className={style.phoneIcon} />
                  (+48) 504-598-563
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className={style.contBtn}>
          <a target="_blank" href="https://www.facebook.com/mskrally">
            <button className={style.btn} type="button">
              SPRAWDŹ NAS <FaArrowRight />
            </button>
          </a>
        </div>
        <div className={style.contBtnScroll}>
          <Link
            to="secondsectiondetaling"
            spy={true}
            offset={0} // dostosuj offset w razie potrzeby
            duration={700}
            smooth={true}
            className={style.navbarBrand}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <FaArrowAltCircleDown className={style.arrowIcon} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FirstSection;
