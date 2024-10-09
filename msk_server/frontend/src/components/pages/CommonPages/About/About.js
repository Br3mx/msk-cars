import React from "react";
import { useSelector } from "react-redux";
import { getAbout } from "../../../../redux/Detailing/detailingReducer";
import style from "./About.module.scss";
import { Container } from "react-bootstrap";
const About = () => {
  const about = useSelector(getAbout);
  return (
    <div className={style.container}>
      <Container>
        <div className={style.content}>
          <h1 className={style.title}>{about.title}</h1>
          <div className={style.description}>
            <p>{about.text}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
