import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarById } from "../../../../redux/Detailing/detailingReducer";
import style from "./SingleRealization.module.scss";
const SingleRealization = () => {
  const { id } = useParams();
  const car = useSelector((state) => getCarById(state, id));
  console.log(car);
  if (!car) {
    return <div>Samochód nie znaleziony</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h1>{car.carMark}</h1>
        </div>
        <div className={style.contText}>
          <span className={style.description}>
            <p>{car.description}</p>
          </span>
          <div className={style.gallery}>
            {car.restImg.map((item, index) => (
              <div key={index} className={style.card}>
                <img src={`/img/${item}`} alt={`car image ${index}`} />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRealization;
