import React from "react";
import style from "./FourthSection.module.scss";
import { FaArrowAltCircleUp, FaHome, FaMapPin, FaPhone } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getFourthSection } from "../../../../redux/Detailing/detailingReducer";
import { getAddress, getPhone } from "../../../../redux/commonRedux";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
const FourthSection = () => {
  const fourthSection = useSelector(getFourthSection);
  const phoneNumber = useSelector(getPhone);
  const address = useSelector(getAddress);
  return (
    <div className={style.container} id="fourthsectiondetaling">
      <Container>
        <div className={style.content}>
          <h1 className={style.title}>{fourthSection.title}</h1>
          <ul className={style.list}>
            {fourthSection.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className={style.lokalization}>
            <div className={style.contText}>
              <div className={style.text}>
                <h2>{fourthSection.title2}</h2>
                <div className={style.place}>
                  <FaMapPin className={style.icon} />
                  <span className={style.placeText}>
                    {address.lokalization}
                  </span>
                </div>
              </div>
              <div className={style.text}>
                <h2>{fourthSection.title3}</h2>
                <div className={style.phoneNumber}>
                  <span className={style.phone}>
                    <a href="tel:+48504598563">{phoneNumber.phone1}</a>
                  </span>
                  <span className={style.phone}>
                    <a href="tel:+48533073301">{phoneNumber.phone2}</a>
                  </span>
                </div>
              </div>
            </div>
            <div className={style.contMap}>
              <iframe
                src={address.map}
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
        <BtnScroll targetId="firstsectiondetaling" icon={FaArrowAltCircleUp} />
      </Container>
    </div>
  );
};

export default FourthSection;
