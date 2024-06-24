import React from "react";
import { Container } from "react-bootstrap";
import style from "./Offer.module.scss";
import { useSelector } from "react-redux";
import { getOffer } from "../../../../redux/Detailing/detailingReducer";
const Offer = () => {
  const offer = useSelector(getOffer);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contText}>
          <h2>
            <strong>{offer.title}</strong>
          </h2>
          <div className={style.card}>
            <ul>
              {offer.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={style.card}>
            <h2>
              <strong>{offer.title2}</strong>
            </h2>
          </div>
          <div className={style.card}>
            <h2>
              <strong>{offer.title3}</strong>
            </h2>
          </div>
          <div className={style.card}>
            <h2>
              <strong>{offer.title4}</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
