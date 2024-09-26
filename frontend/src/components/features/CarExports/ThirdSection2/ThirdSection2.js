import React, { useState, useEffect, useRef } from "react";
import style from "./ThirdSection2.module.scss";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion, useInView } from "framer-motion";
import { IMGS_URL } from "../../../../config";
import Button from "../../../common/Button/Button";
import {
  getRealization2,
  getThirdSection2,
} from "../../../../redux/CarsExport/carsexportReducer";

const ThirdSection = () => {
  const thirdSection = useSelector(getThirdSection2);
  const realization = useSelector(getRealization2);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 896);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 896);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsToShow = isMobile ? 1 : 4;

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
    <motion.div className={style.container} id="thirdsection2">
      <motion.div
        className={style.content}
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {thirdSection.title}
        </motion.h1>
        <div className={style.background}>
          <div className={style.realization}>
            {realization.slice(0, itemsToShow).map((item, index) => (
              <motion.div
                key={index}
                className={style.card}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <img
                  src={`${IMGS_URL}/export/cars/${item.img}`}
                  alt={item.carMark}
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
              </motion.div>
            ))}
          </div>
          <motion.span
            className={style.contButton}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link to="/realization-cars-to-order" className={style.button}>
              <Button>Zobacz więcej realizacji</Button>
            </Link>
          </motion.span>
        </div>
      </motion.div>
      <BtnScroll targetId="fourthsection2" />
    </motion.div>
  );
};

export default ThirdSection;
