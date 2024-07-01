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
        <h1>{car.carMark}</h1>
        <img src={car.img} />
      </div>
    </div>
  );
};

export default SingleRealization;
