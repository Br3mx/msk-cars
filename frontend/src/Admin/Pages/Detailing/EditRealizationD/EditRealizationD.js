import React from "react";
import style from "./EditRealizationD.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRealizationD,
  getRealization,
} from "../../../../redux/Detailing/detailingReducer";
import { IMGS_URL } from "../../../../config";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { REACT_APP_START_URL } from "../../../../environmentVariables";
import { getRole } from "../../../../redux/commonRedux";

const EditRealizationD = () => {
  const realization = useSelector(getRealization);
  const dispatch = useDispatch();
  const user = localStorage.getItem("role");

  const handleDelete = (id) => {
    dispatch(deleteRealizationD(id));
  };

  return (
    <div className={style.container}>
      {user === "ADMIN" ? (
        <div className={style.content}>
          <h1 style={{ textAlign: "center", width: "100vw" }}>DETAILING</h1>
          {realization.map((item, index) => (
            <div key={index} className={style.card}>
              <img
                src={`${IMGS_URL}/detailing/cars/${item.img}`}
                alt={item.img}
              />
              <div className={style.contDesc}>
                <div className={style.contText}>{item.carMark}</div>
                <div className={style.btn}>
                  <Link
                    to={`${REACT_APP_START_URL}/edit/single-detailing/${item.id}`}
                    style={{ textDecoration: "none" }}
                    className={style.link}
                  >
                    <Button>Edytuj realizację</Button>
                  </Link>
                  <span className={style.x}>
                    <Button onClick={() => handleDelete(item.id)}>
                      Usuń realizację
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Not found</h1>
      )}
    </div>
  );
};

export default EditRealizationD;
