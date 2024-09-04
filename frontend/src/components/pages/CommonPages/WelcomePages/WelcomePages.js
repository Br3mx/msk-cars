import React from "react";
import style from "./WelcomePages.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSection } from "../../../common/SectionContext"; // Import kontekstu
import { motion, useInView } from "framer-motion";

const WelcomePages = () => {
  const { setSection } = useSection();
  const navigate = useNavigate();

  const selectSection = (section) => {
    setSection(section);
  };
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <main className={style.container}>
      <motion.div
        className={style.content}
        ref={ref}
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={style.contLogo}
          initial={{ rotate: 180, y: 1000, opacity: 0 }}
          animate={
            inView
              ? { rotate: 0, y: 0, opacity: 1 }
              : { rotate: 180, y: 1000, opacity: 0 }
          }
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src="/img/logo.png" alt="Logo" />
        </motion.div>
        <motion.div className={style.contCard}>
          <Link
            to={"/home-detaling"}
            onClick={() => selectSection("detailing")}
            className={style.link1}
          >
            <motion.div
              className={style.card}
              initial={{ rotate: -30, x: -500, opacity: 0 }}
              animate={
                inView
                  ? { rotate: 0, x: 0, opacity: 1 }
                  : { rotate: -30, x: -500, opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div className={style.contText}>
                <h2>Auto Detaling</h2>
                <Link
                  to={"/home-detaling"}
                  className={style.btn}
                  onClick={() => selectSection("detailing")}
                >
                  SPRAWDŹ
                </Link>
              </motion.div>
            </motion.div>
          </Link>
          <Link
            to={"/home-cars-to-order"}
            onClick={() => selectSection("carorders")}
            className={style.link2}
          >
            <motion.div
              className={style.card}
              initial={{ rotate: 30, x: 500, opacity: 0 }}
              animate={
                inView
                  ? { rotate: 0, x: 0, opacity: 1 }
                  : { rotate: 30, x: 500, opacity: 0 }
              }
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div className={style.contText}>
                <h2>Samochody na zamównienie</h2>
                <Link
                  to={"/home-cars-to-order"}
                  className={style.btn}
                  onClick={() => selectSection("carorders")}
                >
                  SPRAWDŹ
                </Link>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default WelcomePages;
