import React, { useState } from "react";
import style from "./Contact.module.scss";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAddress, getPhone } from "../../../../redux/commonRedux";
import { FaPhoneAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import { API_URL } from "../../../../config";
import Loading from "../../../common/Preloader for button/Loading";
import CustomModal from "../../../common/CustomModal/CustomModal";
import { Link } from "react-router-dom";

const Contact = () => {
  const phoneNumber = useSelector(getPhone);
  const address = useSelector(getAddress);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    title: "",
    message: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [formErrors, setFormErrors] = useState({
    name: false,
    surname: false,
    email: false,
    phone: false,
    title: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    const formattedValue = value.replace(/\D/g, "");

    const isValidPhone = formattedValue.length === 9;

    // Ustawiamy wartość i błąd w zależności od wyniku walidacji
    setFormData({
      ...formData,
      [name]: formattedValue,
    });

    setFormErrors({
      ...formErrors,
      phone: !isValidPhone,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = value.length >= 1;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: !isValid,
    });
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setHasError(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    setHasError(false);

    let errors = {};
    let hasErrors = false;
    setIsLoading(true);
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        errors[key] = true;
        hasErrors = true;
      } else {
        errors[key] = false;
      }
    });

    if (hasErrors) {
      setFormErrors(errors);
      setIsLoading(false);
      return;
    }
    try {
      const mailData = {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        phone: formData.phone,
        title: formData.title,
        message: formData.message,
      };
      if (formData.phone.length < 9) {
        setModalMessage(
          "Proszę wpisać poprawny numer telefonu składający się z 9 cyfr! Poprawny przykład: 123456789"
        );
        setShowModal(true);
        setIsLoading(false);
      } else {
        await axios.post(`${API_URL}/mail/send`, mailData);

        setModalMessage("Email został pomyślnie wysłany 😀");
        setShowModal(true);
      }
    } catch (error) {
      setModalMessage(
        "Wystąpił błąd podczas wysyłki formularza. Upewnij się że wszystkie pola zostały poprawnie wypełnione!"
      );
      setShowModal(true);
      console.error("Error submitting mail:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div className={style.container}>
      <Container>
        {/* Custom modal */}
        <CustomModal
          message={modalMessage}
          showModal={showModal}
          onClose={handleCloseModal}
        />
        <motion.div
          className={style.content}
          ref={ref}
          initial={{ y: 200, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={style.contContact}>
            <aside className={style.contact}>
              <motion.div
                className={style.phone}
                initial={{ x: -100, opacity: 0 }}
                animate={
                  inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
                }
                transition={{ duration: 1, delay: 0.7 }}
              >
                <h2>Telefon</h2>
                <motion.div className={style.phoneNumber}>
                  <span>
                    <a href="tel:+48533073301">
                      <FaPhoneAlt />
                      <p>{phoneNumber.phone1}</p>
                    </a>
                  </span>
                  <span>
                    <a href="tel:+48504598563">
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
                    sandbox="allow-scripts allow-same-origin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>
                </motion.div>
              </motion.div>
            </aside>
          </div>
          <aside className={style.mailForm}>
            <motion.form
              onSubmit={handleSubmit}
              initial={{ y: -100, opacity: 0 }}
              className={style.Form}
              animate={inView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h2 className={style.mainTitle}>Napisz do nas !</h2>
              <span>
                <h6 className={style.title}>Imię (obowiązkowe)</h6>
                <input
                  type="text"
                  name="name"
                  placeholder="np. Jan"
                  maxLength={20}
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? style.error : ""}
                />
                {formErrors.name && (
                  <p className={style.errorMessage}>To pole jest wymagane.</p>
                )}
              </span>
              <span>
                <h6 className={style.title}>Nazwisko (obowiązkowe)</h6>
                <input
                  type="text"
                  name="surname"
                  placeholder="np. Kowalski"
                  maxLength={20}
                  value={formData.surname}
                  onChange={handleChange}
                  className={formErrors.surname ? style.error : ""}
                />
                {formErrors.surname && (
                  <p className={style.errorMessage}>To pole jest wymagane.</p>
                )}
              </span>
              <motion.div className={style.mailPhone}>
                <span>
                  <h6 className={style.title}>Adres email (obowiązkowe)</h6>
                  <input
                    type="email"
                    name="email"
                    placeholder="np. jan.kowalski@example.com"
                    maxLength={30}
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? style.error : ""}
                  />
                  {formErrors.email && (
                    <p className={style.errorMessage}>To pole jest wymagane.</p>
                  )}
                </span>
                <span>
                  <h6 className={style.title}>Numer Telefonu (obowiązkowe)</h6>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    placeholder="np. 123456789"
                    maxLength={9}
                    onChange={handleChangePhone}
                    className={formErrors.phone ? style.error : ""}
                    pattern="[0-9]*"
                  />
                  {formErrors.phone && (
                    <p className={style.errorMessage}>To pole jest wymagane.</p>
                  )}
                </span>
              </motion.div>
              <span className={style.parentCheck}>
                {formErrors.title && (
                  <p className={style.errorMessage}>To pole jest wymagane.</p>
                )}
                <select
                  id="title"
                  name="title"
                  value={formData.title}
                  className={formErrors.title ? style.error : ""}
                  onChange={handleChange}
                >
                  <option value="">Wybierz Tytuł</option>
                  <option value="Samochody na zamówienie">
                    Samochody na zamówienie
                  </option>
                  <option value="Wulkanizacja">Wulkanizacja</option>
                  <option value="Polerowanie lakieru">
                    Polerowanie lakieru
                  </option>
                  <option value="Mycie zewnętrzne">Mycie zewnętrzne</option>
                  <option value="Powłoka ceramiczna">Powłoka ceramiczna</option>
                  <option value="Detailing wnętrza">Detailing wnętrza</option>
                  <option value="Pranie tapicerki">Pranie tapicerki</option>
                  <option value="Przygotowanie auta do sprzedaży">
                    Przygotowanie auta do sprzedaży
                  </option>
                  <option value="Przyciemnianie szyb">
                    Przyciemnianie szyb
                  </option>
                  <option value="Regeneracja reflektorów">
                    Regeneracja reflektorów
                  </option>
                  <option value="Inne">Inne</option>
                </select>
                <span className={style.zgoda}>
                  <input
                    className={hasError ? style.errorCheckbox : style.checkbox}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    name="zgoda"
                    id="zgoda"
                  />
                  <label htmlFor="zgoda">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych
                    zgodnie z <Link to={"/policy"}> Polityką Prywatności</Link>*
                  </label>
                </span>
              </span>
              <span>
                <h6>Dodatkowe informacje i pytania (obowiązkowe)</h6>
                <textarea
                  placeholder=""
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? style.error : ""}
                />
                {formErrors.message && (
                  <p className={style.errorMessage}>To pole jest wymagane.</p>
                )}
              </span>
              <span className={style.contButton}>
                <button type="submit" disabled={isLoading}>
                  {isLoading ? <Loading /> : "Wyślij"}
                </button>
              </span>
            </motion.form>
          </aside>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Contact;
