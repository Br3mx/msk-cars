import React from "react";
import style from "./SecondSection2.module.scss";
import { Container } from "react-bootstrap";
import Button from "../../../common/Button/Button";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSecondSection2 } from "../../../../redux/CarsExport/carsexportReducer";
import { motion, useInView } from "framer-motion";
const SecondSection2 = () => {
  const secondsection = useSelector(getSecondSection2);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className={style.container} id="secondsection2">
      <motion.div
        className={style.content}
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Container>
          <div className={style.contText}>
            <h5>{secondsection.text1}</h5>
          </div>
          <motion.div
            className={style.offer}
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3>{secondsection.text2}</h3>
            <motion.div
              className={style.contBtns}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Link to="/offer" className={style.link}>
                <Button>Sprawdź naszą ofertę !</Button>
              </Link>
              <Link to="/contact" className={style.link}>
                <Button>Skontaktuj się z nami !</Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>
      <BtnScroll targetId="thirdsection2" />
    </div>
  );
};

export default SecondSection2;
