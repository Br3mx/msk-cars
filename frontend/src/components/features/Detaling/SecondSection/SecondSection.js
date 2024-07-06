import React from "react";
import style from "./SecondSection.module.scss";
import { Link } from "react-router-dom";
import { FaArrowAltCircleDown } from "react-icons/fa";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { useSelector } from "react-redux";
import { getSecondSection } from "../../../../redux/Detailing/detailingReducer";
import Button from "../../../common/Button/Button";
import { motion, useInView } from "framer-motion";

const SecondSection = () => {
  const secondSection = useSelector(getSecondSection);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div className={style.container} id="secondsectiondetaling">
      <motion.div
        className={style.content}
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={style.contText}>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {secondSection.title}
          </motion.h1>
          <motion.h4
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {secondSection.text}
          </motion.h4>
        </div>
        <motion.div
          className={style.contCard}
          initial={{ rotate: 180, scale: 0.5, opacity: 0 }}
          animate={
            inView
              ? { rotate: 0, scale: 1, opacity: 1 }
              : { rotate: 180, scale: 0.5, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className={style.card}>
            <div className={style.contText}>
              <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                Sprawdź Naszą ofertę
              </motion.h2>
              <Link
                to={"/offer-detaling"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  <Button>Sprawdź</Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <BtnScroll targetId="thirdsectiondetaling" />
    </motion.div>
  );
};

export default SecondSection;
