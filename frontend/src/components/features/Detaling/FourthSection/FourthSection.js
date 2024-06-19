import React from "react";
import style from "./FourthSection.module.scss";
const FourthSection = () => {
  return (
    <div className={style.container} id="fourthsectiondetaling">
      <div className={style.content}>
        <h1 className={style.title}>Dlaczego MSK CARS?</h1>
        <ul className={style.list}>
          <li>
            {" "}
            Najwyższej Jakości Produkty: Używamy tylko sprawdzonych i
            renomowanych produktów.
          </li>
          <li>
            {" "}
            Indywidualne Podejście: Każdy samochód traktujemy z najwyższą
            starannością, dostosowując usługi do Twoich potrzeb.
          </li>
          <li>
            {" "}
            Satysfakcja Gwarantowana: Twoje zadowolenie to nasz priorytet!
            Zaufaj nam i przekonaj się sam.
          </li>
        </ul>
        <div className={style.lokalization}>
          <h2>Znajdź nas</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.614997195598!2d16.808683476230733!3d50.5971088767936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e252e72615e9f%3A0x6394d02562c853ba!2zS29sZWpvd2EgMSwgNTctMjAwIFrEhWJrb3dpY2UgxZpsxIVza2ll!5e0!3m2!1sen!2spl!4v1718812657384!5m2!1sen!2spl"
            width="400"
            height="300"
            className={style.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
