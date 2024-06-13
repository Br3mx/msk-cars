import React from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Offer from "./components/pages/Offer/Offer";
import Realization from "./components/pages/Realization/Realization";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Realization" element={<Realization />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
