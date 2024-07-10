import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarById } from "../../../../redux/Detailing/detailingReducer";
import style from "./SingleRealization.module.scss";
import { motion, useInView } from "framer-motion";

const SingleRealization = () => {
  const { id } = useParams();
  const car = useSelector((state) => getCarById(state, id));
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  if (!car) {
    return <div>Samochód nie znaleziony</div>;
  }
  const restImgJsonParse = JSON.parse(car.restImg);
  return (
    <motion.div className={style.container}>
      <div className={style.content}>
        <motion.div
          ref={ref}
          className={style.title}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <h1>{car.carMark}</h1>
        </motion.div>
        <div className={style.contText}>
          <motion.span
            className={style.description}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p>{car.description}</p>
          </motion.span>
          <div className={style.gallery}>
            {restImgJsonParse.map((item, index) => (
              <motion.div
                key={index}
                className={style.card}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: inView ? 1 : 0.5, opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <img src={`/img/${item}`} alt={`car image ${index}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleRealization;
