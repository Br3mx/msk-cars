import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarById } from "../../../../redux/Detailing/detailingReducer";
import style from "./SingleRealization.module.scss";
import { motion, useInView } from "framer-motion";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Controls } from "./utils/Controls";
import { IMGS_URL } from "../../../../config";

const SingleRealization = () => {
  const { id } = useParams();
  const car = useSelector((state) => getCarById(state, id));
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState(null);

  if (!car) {
    return <div>Samochód nie znaleziony</div>;
  }

  const restImgJsonParse = JSON.parse(car.restImg);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

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
                onClick={() =>
                  handleImageClick(`${IMGS_URL}/detailing/cars/${item}`)
                }
              >
                <img
                  src={`${IMGS_URL}/detailing/cars/${item}`}
                  alt={`${index}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {selectedImage && (
        <motion.div
          className={style.modal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          //onClick={handleCloseModal}
        >
          <TransformWrapper
            defaultScale={1}
            defaultPositionX={200}
            defaultPositionY={100}
          >
            <TransformComponent>
              <img
                src={selectedImage}
                alt="Selected Car"
                className={style.modalImage}
              />
            </TransformComponent>
            <Controls closeFunction={handleCloseModal} />
          </TransformWrapper>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SingleRealization;
