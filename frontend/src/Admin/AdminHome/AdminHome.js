import React from "react";
import style from "./AdminHome.module.scss";
import { Link } from "react-router-dom";
import { REACT_APP_START_URL } from "../../environmentVariables";
const AdminHome = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <span className={style.logo}>
          <img src="/img/logo.png" alt="logo" />
        </span>
        <div className={style.cards}>
          <div className={style.detailing}>
            <h3>Detailing</h3>
            <div className={style.card}>
              <Link to={`${REACT_APP_START_URL}/detaling/add-realization`}>
                <button className={style.btn}>Dodaj realizacje</button>
              </Link>
              <Link to={`${REACT_APP_START_URL}/detaling/edit-realization`}>
                <button className={style.btn}>
                  Edytuj lub usuń realizacje
                </button>
              </Link>
            </div>
          </div>
          <div className={style.carsToOrder}>
            <h3>Samochody na zamówienie</h3>
            <div className={style.card}>
              <Link to={`${REACT_APP_START_URL}/cars-to-order/add-realization`}>
                <button className={style.btn}>Dodaj realizacje</button>
              </Link>
              <Link
                to={`${REACT_APP_START_URL}/cars-to-order/edit-realization`}
              >
                <button className={style.btn}>
                  Edytuj lub usuń realizacje
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
