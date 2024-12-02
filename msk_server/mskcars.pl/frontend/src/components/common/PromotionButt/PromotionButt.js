import React from "react";
import { Link as Link1 } from "react-router-dom";
import Button from "../Button/Button";
import style from "./PromotionButt.module.scss";

const PromotionButt = () => {
  return (
    <div className={style.container2}>
      <div className={style.contPromotion}>
        <Link1 to="/promotion-detailing" className={style.linkPromotion}>
          <Button>
            SPRAWDŹ NASZE AKTUALNE PROMOCJE
            <h3 className={style.promotion}>NOWA PROMOCJA !</h3>
          </Button>
        </Link1>
      </div>
    </div>
  );
};

export default PromotionButt;
