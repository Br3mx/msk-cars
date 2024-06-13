import React from "react";
import style from "./FirstSection.module.scss";
import { FaArrowRight, FaPhone } from "react-icons/fa";
const FirstSection = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contText}>
          <h5>ODKRYJ PERFEKCJĘ TWOJEGO SAMOCHODU!</h5>
          <p>Profesjonalny autodetaling na NAJWYŻSZYM POZIOMIE!</p>
        </div>
        <div className={style.contPhone}>
          <span>
            <FaPhone className={style.phoneIcon} />

            <a href="tel:+48533073301"> (+48) 533-073-301</a>
          </span>
        </div>
        <div className={style.contBtn}>
          <button className={style.btn} type="button">
            SPRAWDŹ NAS <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
