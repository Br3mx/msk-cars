import React from "react";
import style from "./ThirdSection.module.scss";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { Container } from "react-bootstrap";
import Button from "../../../common/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getRealization,
  getThirdSection,
} from "../../../../redux/Detailing/detailingReducer";
import { motion, useInView } from "framer-motion";
import { IMGS_URL } from "../../../../config";

const ThirdSection = () => {
  const thirdSection = useSelector(getThirdSection);
  const realization = useSelector(getRealization);

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  console.log(inView);

  return (
    <motion.div className={style.container} id="thirdsectiondetaling">
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
        <div className={style.realization}>
          {realization.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              className={style.card}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
            >
              <img src={`${IMGS_URL}/detailing/hyundai/${item.img}`} />

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
            </motion.div>
          ))}
          <motion.span
            className={style.contButton}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link to="/realization-detaling" className={style.button}>
              <Button>Zobacz więcej realizacji</Button>
            </Link>
          </motion.span>
        </div>
      </motion.div>
      <BtnScroll targetId="fourthsectiondetaling" />
    </motion.div>
  );
};

export default ThirdSection;
