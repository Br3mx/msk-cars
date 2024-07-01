import React, { useState } from "react";
import style from "./Contact.module.scss";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAddress, getPhone } from "../../../../redux/commonRedux";
import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
import Button from "../../../common/Button/Button";
const Contact = () => {
  const phoneNumber = useSelector(getPhone);
  const address = useSelector(getAddress);
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const formattedPhoneNumber = e.target.value.replace(/[^0-9-()\s]/g, "");
    setPhone(formattedPhoneNumber);
  };
  return (
    <div className={style.container}>
      <Container>
        <div className={style.content}>
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
          <asside className={style.mailForm}>
            <form>
              <h2 className={style.mainTitle}>Napisz do nas !</h2>
              <span>
                <h6 className={style.title}>Imię (obowiązkowe)</h6>
                <input type="text" placeholder="np. Jan" maxLength={20} />
              </span>
              <span>
                <h6 className={style.title}>Nazwisko (obowiązkowe)</h6>
                <input type="text" placeholder="np. Kowalski" maxLength={20} />
              </span>
              <div className={style.mailPhone}>
                <span>
                  <h6 className={style.title}>Adres email (obowiązkowe)</h6>
                  <input
                    type="email"
                    placeholder="np. jan.kowalski@example.com"
                    maxLength={30}
                  />
                </span>
                <span>
                  <h6 className={style.title}>Numer Telefonu (obowiązkowe)</h6>
                  <input
                    type="text"
                    value={phone}
                    onChange={handleInputChange}
                    placeholder="np. 123-456-789"
                    maxLength={9}
                  />
                </span>
              </div>
              <span>
                <select id="title" className={style.titleSelect}>
                  <option value="">Wybierz Tytuł</option>
                  <option value="1">Powłoki ceramiczne</option>
                  <option value="2">Korekta lakieru</option>
                  <option value="3">Czyszczenie wnętrza</option>
                  <option value="4">Pranie tapicerki</option>
                  <option value="5">Regeneracja Reflektorów</option>
                  <option value="6">Folie ochronne</option>
                  <option value="7">Przyciemnianie szyb i lamp</option>
                  <option value="8">Inne</option>
                </select>
              </span>
              <span>
                <h6>Dodatkowe pytania i uwagi (obowiązkowe)</h6>
                <textarea placeholder="" />
              </span>
              <span className={style.contButton}>
                <Button type="submit">Wyślij</Button>
              </span>
            </form>
          </asside>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
