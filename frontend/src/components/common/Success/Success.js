import React from "react";
import style from "./Success.module.scss";
const Success = ({ children }) => {
  return (
    <div className={style.container}>
      <h2 className={style.successMessage}>{children}</h2>
    </div>
  );
};

export default Success;
