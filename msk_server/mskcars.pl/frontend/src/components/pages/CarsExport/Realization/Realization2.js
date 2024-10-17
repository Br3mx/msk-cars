import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../common/Button/Button";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import style from "./Realization2.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { IMGS_URL } from "../../../../config";
import { getRealization2 } from "../../../../redux/CarsExport/carsexportReducer";

const Realization2 = () => {
  const [view, setView] = useState(false);
  const realization = useSelector(getRealization2);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  const handleClick = () => {
    setView((prevView) => !prevView);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 896,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (realization.length < 4 && realization.length > 0) {
    settings.slidesToShow = 1;
    settings.slidesToScroll = 1;
  }
  if (realization.length === 0) {
    return (
      <h1
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        Nie znaleziono żadnych realizacji
      </h1>
    );
  }
  return (
    <motion.div className={style.container}>
      <Container>
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          className={style.content}
        >
          <motion.div
            className={style.title}
            initial={{ y: -100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1>Realizacje</h1>
          </motion.div>

          <div
            className={`${style.realization} ${
              view ? style.hidden : style.show
            }`}
          >
            <Slider {...settings}>
              {realization.map((item, index) => (
                <motion.div
                  key={index}
                  className={style.cardWrapper}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={
                    inView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.5, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={`/realization-cars-to-order/${item.id}`}
                    style={{ textDecoration: "none", color: "#cceeff" }}
                  >
                    <div key={index} className={style.card}>
                      <img
                        src={`${IMGS_URL}/export/cars/${item.img}`}
                        alt={item.img}
                      />
                      <div className={style.contDesc}>
                        <div className={style.contText}>{item.carMark}</div>
                        <div className={style.btn}>
                          <Link
                            to={`/realization-cars-to-order/${item.id}`}
                            style={{ textDecoration: "none" }}
                            className={style.link}
                          >
                            <Button>Zobacz realizację</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </Slider>
          </div>

          <div className={style.contBtn}>
            <button onClick={handleClick}>
              {view ? "Zwiń realizacje" : "Rozwiń wszystkie realizacje"}
            </button>
          </div>
          <div
            className={`${style.allRealization} ${
              !view ? style.hidden : style.show
            }`}
          >
            {realization.map((item, index) => (
              <motion.div
                key={index}
                className={style.cardWrapper}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  to={`/realization-cars-to-order/${item.id}`}
                  style={{ textDecoration: "none", color: "#cceeff" }}
                >
                  <div className={style.card}>
                    <img
                      src={`${IMGS_URL}/export/cars/${item.img}`}
                      alt={item.img}
                    />
                    <div className={style.contDesc}>
                      <div className={style.contText}>{item.carMark}</div>
                      <div className={style.btn}>
                        <Link
                          to={`/realization-cars-to-order/${item.id}`}
                          style={{ textDecoration: "none" }}
                          className={style.link}
                        >
                          <Button>Zobacz realizację</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Realization2;
