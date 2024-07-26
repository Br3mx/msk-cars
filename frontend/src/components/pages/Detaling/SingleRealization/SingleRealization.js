import React, { useEffect, useRef, useState } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const [wrapperStyle, setWrapperStyle] = useState({
    height: "35rem",
    width: "100%",
  });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    // Zmiana klasy dla kursorów
    if (dragRef.current) {
      dragRef.current.classList.add(style.grabbing);
    }
    // Zapobiegaj domyślnym działaniom (opcjonalne)
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragRef.current) {
      dragRef.current.classList.remove(style.grabbing);
    }
  };

  useEffect(() => {
    const updateWrapperStyle = () => {
      if (window.innerWidth <= 768) {
        setWrapperStyle({ height: "20rem", width: "100%" });
      } else {
        setWrapperStyle({ height: "35rem", width: "100%" });
      }
    };

    window.addEventListener("resize", updateWrapperStyle);
    updateWrapperStyle(); // initial call

    return () => window.removeEventListener("resize", updateWrapperStyle);
  }, []);

  if (!car) {
    return (
      <h1
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        Nie znaleziono samochodu
      </h1>
    );
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
            animate={{ y: 0, opacity: 1 }}
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
                animate={{ scale: 1, opacity: 1 }}
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
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <TransformWrapper
            defaultScale={1}
            defaultPositionX={200}
            defaultPositionY={100}
          >
            <span
              className={style.border}
              ref={dragRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              <TransformComponent wrapperStyle={wrapperStyle}>
                <img
                  src={selectedImage}
                  alt="Selected Car"
                  className={style.modalImage}
                />
              </TransformComponent>
            </span>
            <Controls closeFunction={handleCloseModal} />
          </TransformWrapper>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SingleRealization;
