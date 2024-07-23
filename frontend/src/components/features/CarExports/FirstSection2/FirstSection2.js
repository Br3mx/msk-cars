import React from "react";
import style from "./FirstSection2.module.scss";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPhone } from "../../../../redux/commonRedux";
import { FaArrowAltCircleRight, FaPhone } from "react-icons/fa";
import Button from "../../../common/Button/Button";
import { getFirstSection2 } from "../../../../redux/CarsExport/carsexportReducer";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { motion, useInView } from "framer-motion";

const FirstSection2 = () => {
  const phones = useSelector(getPhone);
  const firstSection = useSelector(getFirstSection2);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className={style.container} id="firstsection2">
      <motion.div
        className={style.content}
        ref={ref}
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <div className={style.wrapper}>
            <motion.div
              className={style.contText}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x1: -50, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>{firstSection.title}</h1>
              <p> {firstSection.text}</p>
            </motion.div>
            <motion.div
              className={style.contPhones}
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className={style.contPhone}>
                <span>
                  <a href="tel:+48533073301">
                    <FaPhone className={style.icon} />
                    {phones.phone1}
                  </a>
                </span>
                <span>
                  <a href="tel:+48504598563">
                    <FaPhone className={style.icon} />
                    {phones.phone2}
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className={style.btnCont}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/mskrally"
            >
              <Button>
                Sprawdź nas <FaArrowAltCircleRight className={style.icon} />
              </Button>
            </a>
          </motion.div>
        </Container>
      </motion.div>
      <BtnScroll targetId="secondsection2" />
    </div>
  );
};

export default FirstSection2;
