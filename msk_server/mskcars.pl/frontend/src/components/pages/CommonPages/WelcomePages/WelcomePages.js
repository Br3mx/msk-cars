import React from "react";
import style from "./WelcomePages.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSection } from "../../../common/SectionContext"; // Import kontekstu
import { motion, useInView } from "framer-motion";
import { GiCarWheel } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import PromotionButt from "../../../common/PromotionButt/PromotionButt";
import { getPromotion } from "../../../../redux/commonRedux";
import { useSelector } from "react-redux";
const WelcomePages = () => {
  const { setSection } = useSection();
  const navigate = useNavigate();
  const prom = useSelector(getPromotion);
  const handleNavigateD = () => {
    navigate("/home-detaling");
    selectSection("detailing");
  };
  const handleNavigateC = () => {
    navigate("/home-cars-to-order");
    selectSection("carorders");
  };

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
        {prom.length === 0 ? (
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
        ) : (
          <div className={style.logoPromConta}>
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
            {/*dodać */}
            <motion.div
              className={style.prom}
              initial={{ y: -1000, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -1000, opacity: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <PromotionButt />
            </motion.div>
            {/*dodać */}
          </div>
        )}
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
                <button className={style.btn} onClick={handleNavigateD}>
                  SPRAWDŹ
                </button>
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
                <button className={style.btn} onClick={handleNavigateC}>
                  SPRAWDŹ
                </button>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          className={style.wheel}
          initial={{ x: -500, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link to={"/vulcanization"} className={style.link3}>
            <span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className={style.new}
              >
                NOWOŚĆ!
              </motion.span>
              SPRAWDŹ NASZE USŁUGI WULKANIZACYJNE{" "}
            </span>
            <FaArrowRight className={style.icon} />
            <GiCarWheel className={style.wheelI} />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default WelcomePages;
