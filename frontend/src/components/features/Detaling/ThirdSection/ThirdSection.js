import React from "react";
import style from "./ThirdSection.module.scss";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { Container } from "react-bootstrap";
import Button from "../../../common/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getRealization,
  getThirdSection,
} from "../../../../redux/Detailing/detailingReducer";
const ThirdSection = () => {
  const thirdSection = useSelector(getThirdSection);
  const realization = useSelector(getRealization);
  return (
    <div className={style.container} id="thirdsectiondetaling">
      <div className={style.content}>
        <h1>{thirdSection.title}</h1>
        <div className={style.realization}>
          {realization.car.slice(0, 4).map((item, index) => (
            <div key={index} className={style.card}>
              <img src={`/img/${item.img}`} alt={item.carMark} />
              <div className={style.contDesc}>
                <div className={style.contText}>{item.carMark}</div>
                <div className={style.btn}>
                  <Link
                    to={`/realization-detaling/${item.id}`}
                    style={{ textDecoration: "none" }}
                    className={style.link}
                  >
                    <Button>Zobacz realizację</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <Link to="/realization-detaling" className={style.button}>
            <Button>Zobacz więcej realizacji</Button>
          </Link>
        </div>
      </div>
      <BtnScroll targetId="fourthsectiondetaling" />
    </div>
  );
};

export default ThirdSection;
