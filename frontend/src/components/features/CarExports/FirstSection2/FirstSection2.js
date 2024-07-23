import React from "react";
import style from "./FirstSection2.module.scss";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPhone } from "../../../../redux/commonRedux";
import { FaPhone } from "react-icons/fa";
const FirstSection2 = () => {
  const phones = useSelector(getPhone);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Container>
          <div className={style.wrapper}>
            <div className={style.contText}>
              <h1>Szukasz wymarzonego samochodu ?</h1>
              <p>
                {" "}
                Zaufaj naszemu doświadczeniu i pasji do motoryzacji.
                <br /> Twoje marzenie o idealnym samochodzie jest w zasięgu
                ręki!
              </p>
            </div>
            <div className={style.contPhones}>
              <div className={style.contPhone}>
                <span>
                  <a href="tel:+48533073301">
                    <FaPhone className={style.icon} />
                    {phones.phone1}
                  </a>
                </span>
                <span>
                  <a href="tel:+48504598563">
                    <FaPhone className={style.icon} />
                    {phones.phone2}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FirstSection2;
