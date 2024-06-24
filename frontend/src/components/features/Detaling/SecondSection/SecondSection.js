import React from "react";
import style from "./SecondSection.module.scss";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { useSelector } from "react-redux";
import { getSecondSection } from "../../../../redux/Detailing/detailingReducer";
import Button from "../../../common/Button/Button";
const SecondSection = () => {
  const secondSection = useSelector(getSecondSection);
  return (
    <div className={style.container} id="secondsectiondetaling">
      <div className={style.content}>
        <div className={style.contText}>
          <h1>{secondSection.title}</h1>
          <h4>{secondSection.text}</h4>
        </div>
        <div className={style.contCard}>
          <div className={style.card}>
            <div className={style.contText}>
              <h2>Sprawdź Naszą ofertę</h2>
              <Link
                to={"/offer-detaling"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Button>Sprawdź</Button>
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
