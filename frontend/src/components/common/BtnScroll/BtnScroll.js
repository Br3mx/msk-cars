import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link } from "react-scroll";
import style from "./BtnScroll.module.scss";

const BtnScroll = ({ targetId, icon: Icon = FaArrowAltCircleDown }) => {
  return (
    <div className={style.contBtnScroll}>
      <Link
        to={targetId}
        spy={true}
        offset={0}
        duration={700}
        smooth={true}
        className={style.navbarBrand}
        style={{ textDecoration: "none", cursor: "pointer" }}
      >
        <Icon className={style.arrowIcon} />
      </Link>
    </div>
  );
};

export default BtnScroll;
