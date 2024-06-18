import React from "react";
import style from "./SecondSection.module.scss";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
const SecondSection = () => {
  return (
    <div className={style.container} id="secondsectiondetaling">
      <div className={style.content}>
        <div className={style.contText}>
          <h1>Czy Twój samochód zasługuje na luksusową pielęgnację?</h1>
          <h4>
            U nas w MSK CARS przekształcamy zwykłe auta w prawdziwe dzieła
            sztuki! Oferujemy kompleksowe usługi autodetailingu, które przywrócą
            blask i ochronę każdemu pojazdowi.
          </h4>
        </div>
        <div className={style.contCard}>
          <div className={style.card}>
            <div className={style.contText}>
              <h2>Sprawdź Naszą ofertę</h2>
              <Link to={"/offer-detaling"} className={style.btn}>
                SPRAWDŹ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BtnScroll targetId="thirdsectiondetaling" />
    </div>
  );
};

export default SecondSection;
