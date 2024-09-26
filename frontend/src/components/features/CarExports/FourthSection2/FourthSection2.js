import React from "react";
import style from "./FourthSection2.module.scss";
import { FaArrowAltCircleUp, FaMapPin } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAddress, getPhone } from "../../../../redux/commonRedux";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { motion, useInView } from "framer-motion";
import { getFourthSection2 } from "../../../../redux/CarsExport/carsexportReducer";

const FourthSection2 = () => {
  const fourthSection = useSelector(getFourthSection2);
  const phoneNumber = useSelector(getPhone);
  const address = useSelector(getAddress);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div className={style.container} id="fourthsection2">
      <Container>
        <motion.div
          className={style.content}
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className={style.title}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {fourthSection.title}
          </motion.h1>
          <motion.div
            className={style.list}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {fourthSection.text}
          </motion.div>
          <motion.div
            className={style.lokalization}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className={style.contText}>
              <div className={style.text}>
                <motion.h2>{fourthSection.title2}</motion.h2>
                <motion.div
                  className={style.place}
                  initial={{ x: -50, opacity: 0 }}
                  animate={
                    inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <FaMapPin className={style.icon} />
                  <span className={style.placeText}>
                    {address.lokalization}
                  </span>
                </motion.div>
              </div>
              <div className={style.text}>
                <motion.h2>{fourthSection.title3}</motion.h2>
                <motion.div
                  className={style.phoneNumber}
                  initial={{ x: 50, opacity: 0 }}
                  animate={
                    inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 1 }}
                >
                  <span className={style.phone}>
                    <a href="tel:+48504598563">{phoneNumber.phone1}</a>
                  </span>
                  <span className={style.phone}>
                    <a href="tel:+48533073301">{phoneNumber.phone2}</a>
                  </span>
                </motion.div>
              </div>
            </div>
            <motion.div
              className={style.contMap}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
              }
              transition={{ duration: 1, delay: 1.2 }}
            >
              <iframe
                src={address.map}
                width="400"
                height="300"
                className={style.map}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin"
                title="Google Maps"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
        <BtnScroll targetId="firstsection2" icon={FaArrowAltCircleUp} />
      </Container>
    </motion.div>
  );
};

export default FourthSection2;
