import React from "react";
import style from "./Contact.module.scss";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAddress, getPhone } from "../../../../redux/commonRedux";
import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  const phoneNumber = useSelector(getPhone);
  const address = useSelector(getAddress);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Container>
          <aside className={style.contact}>
            <div className={style.phone}>
              <h2>Telefon</h2>
              <div className={style.phoneNumber}>
                <span>
                  <a href="tel:+48533073301" target="_blank">
                    <FaPhoneAlt />
                    <p>{phoneNumber.phone1}</p>
                  </a>
                </span>
                <span>
                  <a href="tel:+48504598563" target="_blank">
                    <FaPhoneAlt />
                    <p>{phoneNumber.phone2}</p>
                  </a>
                </span>
              </div>
            </div>
            <div className={style.address}>
              <div className={style.contLok}>{address.lokalization}</div>
              <div className={style.map}>
                <iframe
                  src={address.map}
                  width="350"
                  height="300"
                  className={style.map}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </aside>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
