import React from "react";
import { FaSadCry } from "react-icons/fa";
import style from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>404</h1>
        <h2>NOT FOUND</h2>
        <FaSadCry />
      </div>
    </div>
  );
};

export default NotFound;
