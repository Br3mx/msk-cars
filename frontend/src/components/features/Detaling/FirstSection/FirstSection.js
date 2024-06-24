import React from "react";
import style from "./FirstSection.module.scss";
import { FaArrowAltCircleDown, FaArrowRight, FaPhone } from "react-icons/fa";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { getFirstSection } from "../../../../redux/Detailing/detailingReducer";
import { useSelector } from "react-redux";
import { getPhone } from "../../../../redux/commonRedux";
import Button from "../../../common/Button/Button";

const FirstSection = () => {
  const firstSection = useSelector(getFirstSection);
  const phoneNumber = useSelector(getPhone);
  return (
    <div className={style.container} id="firstsectiondetaling">
      <Container>
        <div className={style.content}>
          <div className={style.contText}>
            <h5>{firstSection.title}</h5>
            <p>
              {firstSection.subtitle} <br />
              <span>{firstSection.strong}</span>
            </p>
          </div>
          <div className={style.contPhones}>
            <div className={style.contPhone}>
              <span>
                <a href="tel:+48533073301">
                  <FaPhone className={style.phoneIcon} />
                  {phoneNumber.phone1}
                </a>
              </span>
            </div>
            <div className={style.contPhone}>
              <span>
                <a href="tel:+48504598563">
                  <FaPhone className={style.phoneIcon} />
                  {phoneNumber.phone2}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className={style.contBtn}>
          <a target="_blank" href="https://www.facebook.com/mskrally">
            <Button>
              SPRAWDŹ NAS <FaArrowRight />
            </Button>
          </a>
        </div>
        <BtnScroll targetId="secondsectiondetaling" />
      </Container>
    </div>
  );
};

export default FirstSection;
