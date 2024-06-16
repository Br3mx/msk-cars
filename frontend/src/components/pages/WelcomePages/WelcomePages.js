import React from "react";
import style from "./WelcomePages.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSection } from "../../common/SectionContext"; // Import kontekstu

const WelcomePages = () => {
  const { setSection } = useSection();
  const navigate = useNavigate();

  const selectSection = (section) => {
    setSection(section);
    navigate("/"); // Przejdź do strony głównej lub innej właściwej strony
  };

  return (
    <main className={style.container}>
      <div className={style.content}>
        <div className={style.contLogo}>
          <img src="/img/logo.png" alt="Logo" />
        </div>
        <div className={style.contCard}>
          <div className={style.card}>
            <div className={style.contText}>
              <h2>Auto Detaling</h2>
              <Link
                to={"/home-detaling"}
                className={style.btn}
                onClick={() => selectSection("detailing")}
              >
                SPRAWDŹ
              </Link>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.contText}>
              <h2>Samochody na zamównienie</h2>
              <Link
                to={"/home-cars-to-order"}
                className={style.btn}
                onClick={() => selectSection("carorders")}
              >
                SPRAWDŹ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WelcomePages;
