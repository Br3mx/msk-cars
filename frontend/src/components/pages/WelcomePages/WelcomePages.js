import React from "react";
import style from "./WelcomePages.module.scss";
import { Link } from "react-router-dom";
const WelcomePages = () => {
  return (
    <main className={style.container}>
      <div className={style.content}>
        <div className={style.contLogo}>
          <img src="/img/logo.png" alt="" />
        </div>
        <div className={style.contCard}>
          <div className={style.card}>
            <div className={style.contText}>
              <h2>Auto Detaling</h2>
              <Link to={"/home-detaling"} className={style.btn}>
                SPRAWDŹ
              </Link>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.contText}>
              <h2>Samochody na zamównienie</h2>
              <Link to={"/home-importing-cars"} className={style.btn}>
                SPRAWDŹ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WelcomePages;
