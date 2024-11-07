import React from "react";
import { Container } from "react-bootstrap";
import style from "./Offer.module.scss";
import { useSelector } from "react-redux";
import { getOffer } from "../../../../redux/Detailing/detailingReducer";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

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
            {/* Cennik usług */}
            <div className={style.firstDiv}>
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
            </div>

            {/* Wulkanizacja */}
            <div className={style.vulcanization}>
              <h2>
                <strong>{offer.vulcanization.title}</strong>
              </h2>
              <span className={style.btnCont}>
                <Link to={"/vulcanization"} className={style.btn}>
                  Sprawdź
                </Link>
              </span>
              <h4>{offer.vulcanization.subtitle}</h4>
              <div className={style.card}>
                <ul>
                  {offer.vulcanization.listOffer.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <h4>{offer.vulcanization.subtitle2}</h4>
              <div className={style.card}>
                <ul>
                  {offer.vulcanization.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Samochody na zamówienie */}
          <div className={style.secondDiv}>
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
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Offer;
