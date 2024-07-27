import React from "react";
import style from "./FirstSection.module.scss";
import { FaFacebook, FaInstagram, FaMapPin, FaPhone } from "react-icons/fa";
import { Container } from "react-bootstrap";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { useSelector } from "react-redux";
import { getFirstSection } from "../../../../redux/Detailing/detailingReducer";
import { getPhone } from "../../../../redux/commonRedux";
import Button from "../../../common/Button/Button";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";

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
          transition={{ duration: 1 }}
        >
          <div className={style.wrapper}>
            <div className={style.contText}>
              <motion.h5
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {firstSection.title}
              </motion.h5>
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {firstSection.subtitle} <br />
                <span>{firstSection.strong}</span>
              </motion.p>
            </div>
            <motion.div
              className={style.contPhones}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
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
          </div>
          <motion.div
            className={style.lokalization}
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link
              to={"fourthsectiondetaling"}
              spy={true}
              offset={1.1}
              duration={700}
              smooth={true}
              className={style.linkToMap}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <FaMapPin />
              Znajdź nas
            </Link>
          </motion.div>
        </motion.div>
        <div className={style.btnWrapper}>
          <motion.div
            className={style.contPromotion}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link1 to="/promotion-detailing" className={style.linkPromotion}>
              <Button>SPRAWDŹ NASZE AKTUALNE PROMOCJE</Button>
            </Link1>
          </motion.div>
          <motion.div
            className={style.contBtn}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/mskrally"
            >
              <Button>
                <FaFacebook />
              </Button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/mskcars_/"
              className={style.insta}
            >
              <Button>
                <FaInstagram />
              </Button>
            </a>
          </motion.div>
        </div>
        <p className={style.textBtn}>Kliknij aby przejść do kolejnej sekcji</p>
        <BtnScroll targetId="secondsectiondetaling" />
      </Container>
    </motion.div>
  );
};

export default FirstSection;
