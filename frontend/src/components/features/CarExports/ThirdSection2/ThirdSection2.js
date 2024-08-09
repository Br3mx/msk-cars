import React from "react";
import style from "./ThirdSection2.module.scss";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
const ThirdSection2 = () => {
  return (
    <div className={style.container} id="thirdsection2">
      <div className={style.content}></div>
      <BtnScroll targetId="fourthsection2" />
    </div>
  );
};

export default ThirdSection2;
