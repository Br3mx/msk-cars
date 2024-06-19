import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import style from "./MainLayout.module.scss";
const MainLayout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <NavBar />
      <Container className={style.container}>{children}</Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
