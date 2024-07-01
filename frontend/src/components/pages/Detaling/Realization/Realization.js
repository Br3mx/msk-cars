import React from "react";
import { useSelector } from "react-redux";
import { getRealization } from "../../../../redux/Detailing/detailingReducer";
import Button from "../../../common/Button/Button";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import style from "./Realization.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

const Realization = () => {
  const realization = useSelector(getRealization);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className={style.container}>
      <Container>
        <div className={style.content}>
          <div className={style.title}>
            <h1>Realizacje</h1>
          </div>
          <div className={style.realization}>
            <Slider {...settings}>
              {realization.car.map((item, index) => (
                <div key={index} className={style.cardWrapper}>
                  <div className={style.card}>
                    <img src={`/img/${item.img}`} alt={item.carMark} />
                    <div className={style.contDesc}>
                      <div className={style.contText}>{item.carMark}</div>
                      <div className={style.btn}>
                        <Link
                          to={`/realization-detaling/${item.id}`}
                          style={{ textDecoration: "none" }}
                          className={style.link}
                        >
                          <Button>Zobacz realizację</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Realization;
