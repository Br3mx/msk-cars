import React, { useState } from "react";
import style from "./Contact.module.scss";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAddress, getPhone } from "../../../../redux/commonRedux";
import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
import Button from "../../../common/Button/Button";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import { API_URL } from "../../../../config";
const Contact = () => {
  const phoneNumber = useSelector(getPhone);
  const address = useSelector(getAddress);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const formattedPhoneNumber = e.target.value.replace(/[^0-9-()\s]/g, "");
    setPhone(formattedPhoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const mailData = {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        phone: formData.phone,
        title: formData.title,
        message: formData.message,
      };

      const response = await axios.post(`${API_URL}/mail/send`, mailData);
      console.log("Email submitted:", response.data);
    } catch (error) {
      console.error("Error submitting mail:", error);
      console.error("Response from server:", error.response);
    }
  };
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div className={style.container}>
      <Container>
        <motion.div
          className={style.content}
          ref={ref}
          initial={{ y: 200, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <aside className={style.contact}>
            <motion.div
              className={style.phone}
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h2>Telefon</h2>
              <motion.div className={style.phoneNumber}>
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
              </motion.div>
            </motion.div>
            <motion.div
              className={style.address}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.div className={style.contLok}>
                {address.lokalization}
              </motion.div>
              <motion.div
                className={style.map}
                initial={{ rotate: 180, opacity: 0 }}
                animate={
                  inView
                    ? { rotate: 0, opacity: 1 }
                    : { rotate: 180, opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.7 }}
              >
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
              </motion.div>
            </motion.div>
          </aside>
          <asside className={style.mailForm}>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ y: -100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h2 className={style.mainTitle}>Napisz do nas !</h2>
              <span>
                <h6 className={style.title}>Imię (obowiązkowe)</h6>
                <input
                  type="text"
                  placeholder="np. Jan"
                  maxLength={20}
                  value={formData.name}
                />
              </span>
              <span>
                <h6 className={style.title}>Nazwisko (obowiązkowe)</h6>
                <input
                  type="text"
                  placeholder="np. Kowalski"
                  maxLength={20}
                  value={formData.surname}
                />
              </span>
              <motion.div className={style.mailPhone}>
                <span>
                  <h6 className={style.title}>Adres email (obowiązkowe)</h6>
                  <input
                    type="email"
                    placeholder="np. jan.kowalski@example.com"
                    maxLength={30}
                    value={formData.email}
                  />
                </span>
                <span>
                  <h6 className={style.title}>Numer Telefonu (obowiązkowe)</h6>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="np. 123-456-789"
                    maxLength={9}
                  />
                </span>
              </motion.div>
              <span>
                <select
                  id="title"
                  className={style.titleSelect}
                  value={formData.title}
                >
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
                <textarea placeholder="" value={formData.message} />
              </span>
              <span className={style.contButton}>
                <Button type="submit">Wyślij</Button>
              </span>
            </motion.form>
          </asside>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Contact;
