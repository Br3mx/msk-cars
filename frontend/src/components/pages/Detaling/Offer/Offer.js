import React from "react";
import { Container } from "react-bootstrap";
import style from "./Offer.module.scss";
const Offer = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contText}>
          <h2>
            <strong>Auto Detailing</strong>
          </h2>
          <div className={style.card}>
            <ul>
              <li>Powłoki ceramiczne</li>
              <li>Korekta lakieru</li>
              <li>Czyszczenie wnętrza</li>
              <li>Pranie tapicerki</li>
            </ul>
          </div>
          <div className={style.card}>
            <h2>
              <strong>
                Regeneracja
                <br />
                reflektorów
              </strong>
            </h2>
          </div>
          <div className={style.card}>
            <h2>
              <strong>Folie ochronne</strong>
            </h2>
          </div>
          <div className={style.card}>
            <h2>
              <strong>
                Przyciemnianie
                <br />
                szyb i lamp
              </strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
