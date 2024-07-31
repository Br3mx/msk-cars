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
const EditRealizationD = (id) => {
  const realization = useSelector(getRealization);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteRealizationD(id));
  };
  console.log("delete", handleDelete);
  return (
    <div className={style.container}>
      <div className={style.content}>
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
    </div>
  );
};

export default EditRealizationD;
