import React from "react";
import style from "./Promotion.module.scss";
import { useSelector } from "react-redux";
import { getPromotion } from "../../../../redux/commonRedux";
import { IMGS_URL } from "../../../../config";
const Promotion = () => {
  const promotion = useSelector(getPromotion);
  return (
    <div className={style.container}>
      {promotion.length === 0 ? (
        <h1>NARAZIE NIE MA ŻADNYCH PROMOCJI</h1>
      ) : (
        <div className={style.cardWrapper}>
          <div className={style.card}>
            <img
              src={`${IMGS_URL}/promotion/${promotion.promotionImg}`}
              alt={promotion.promotionImg}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Promotion;
