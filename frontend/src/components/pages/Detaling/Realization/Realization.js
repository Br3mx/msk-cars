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
import { motion, useInView } from "framer-motion";
import { IMGS_URL } from "../../../../config";

const Realization = () => {
  const realization = useSelector(getRealization);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

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
        breakpoint: 768,
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
          <div className={style.realization}>
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
                  <div key={index} className={style.card}>
                    <img
                      src={`${IMGS_URL}/detailing/hyundai/${item.img}`}
                      alt={item.carMark}
                    />
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
                </motion.div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Realization;
