import React from "react";
import style from "./ThirdSection.module.scss";
import BtnScroll from "../../../common/BtnScroll/BtnScroll";
import { Container } from "react-bootstrap";
const ThirdSection = () => {
  return (
    <div className={style.container} id="thirdsectiondetaling">
      <Container>
        <div className={style.content}>
          <h1>Realizacje</h1>

          <BtnScroll targetId="fourthsectiondetaling" />
        </div>
      </Container>
    </div>
  );
};

export default ThirdSection;
