import React from "react";
import style from "./FirstSection.module.scss";
import { FaArrowAltCircleDown, FaArrowRight, FaPhone } from "react-icons/fa";
import { Container } from "react-bootstrap";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { useSelector } from "react-redux";
import { getFirstSection } from "../../../../redux/Detailing/detailingReducer";
import { getPhone } from "../../../../redux/commonRedux";
import Button from "../../../common/Button/Button";
import { motion, useInView } from "framer-motion";

const FirstSection = () => {
  const firstSection = useSelector(getFirstSection);
  const phoneNumber = useSelector(getPhone);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div className={style.container} id="firstsectiondetaling">
      <Container>
        <motion.div
          className={style.content}
          ref={ref}
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={style.contText}>
            <motion.h5
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {firstSection.title}
            </motion.h5>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {firstSection.subtitle} <br />
              <span>{firstSection.strong}</span>
            </motion.p>
          </div>
          <motion.div
            className={style.contPhones}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <div className={style.contPhone}>
              <span>
                <a href="tel:+48533073301">
                  <FaPhone className={style.phoneIcon} />
                  {phoneNumber.phone1}
                </a>
              </span>
            </div>
            <div className={style.contPhone}>
              <span>
                <a href="tel:+48504598563">
                  <FaPhone className={style.phoneIcon} />
                  {phoneNumber.phone2}
                </a>
              </span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className={style.contBtn}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <a target="_blank" href="https://www.facebook.com/mskrally">
            <Button>
              SPRAWDŹ NAS <FaArrowRight />
            </Button>
          </a>
        </motion.div>
        <BtnScroll targetId="secondsectiondetaling" />
      </Container>
    </motion.div>
  );
};

export default FirstSection;
