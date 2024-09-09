import React from "react";
import style from "./AdminHome.module.scss";
import { Link } from "react-router-dom";
import { REACT_APP_START_URL } from "../../environmentVariables";

const AdminHome = () => {
  const user = localStorage.getItem("role");
  console.log(user);

  return (
    <div className={style.container}>
      {user === "ADMIN" ? (
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
                <Link
                  to={`${REACT_APP_START_URL}/cars-to-order/add-realization`}
                >
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
            <div className={style.prom}>
              <div className={style.card}>
                <h3>Promocja</h3>
                <Link to={`${REACT_APP_START_URL}/promotion`}>
                  <button className={style.btn}>Dodaj lub usuń promocję</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.error}>
          <h1>Brak dostępu do tej sekcji</h1>
          <Link to="/">Powrót do strony głównej</Link>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
