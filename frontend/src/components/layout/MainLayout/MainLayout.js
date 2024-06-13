import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
