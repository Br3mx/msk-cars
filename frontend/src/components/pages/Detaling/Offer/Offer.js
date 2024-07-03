import React from "react";
import { Container } from "react-bootstrap";
import style from "./Offer.module.scss";
import { useSelector } from "react-redux";
import { getOffer } from "../../../../redux/Detailing/detailingReducer";
import { motion, useInView } from "framer-motion";

const Offer = () => {
  const offer = useSelector(getOffer);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div className={style.container}>
      <Container>
        <motion.div
          className={style.content}
          ref={ref}
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={style.contText}>
            <h2>
              <strong>{offer.title}</strong>
            </h2>
            <div className={style.card}>
              <ul>
                {offer.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <motion.div
              className={style.card}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2>
                <strong>{offer.title2}</strong>
              </h2>
            </motion.div>
            <motion.div
              className={style.card}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h2>
                <strong>{offer.title3}</strong>
              </h2>
            </motion.div>
            <motion.div
              className={style.card}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h2>
                <strong>{offer.title4}</strong>
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Offer;
