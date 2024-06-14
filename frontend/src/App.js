import React from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Home from "./components/pages/Detaling/Home/Home";
import About from "./components/pages/Detaling/About/About";
import Contact from "./components/pages/Detaling/Contact/Contact";
import Offer from "./components/pages/Detaling/Offer/Offer";
import Realization from "./components/pages/Detaling/Realization/Realization";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./components/pages/Detaling/NotFound/NotFound";
import WelcomePages from "./components/pages/WelcomePages/WelcomePages";
const App = () => {
  const location = useLocation();

  return (
    <main>
      {location.pathname === "/" ? (
        <Routes>
          <Route path="/" element={<WelcomePages />} />
        </Routes>
      ) : (
        <MainLayout>
          <Routes>
            {/* Detaling */}
            <Route path="/home-detaling" element={<Home />} />
            <Route path="/about-detaling" element={<About />} />
            <Route path="/contact-detaling" element={<Contact />} />
            <Route path="/offer-detaling" element={<Offer />} />
            <Route path="/realization-detaling" element={<Realization />} />
            <Route path="*" element={<NotFound />} />
            {/* SPROWADZANIE SAMOCHODÓW */}
          </Routes>
        </MainLayout>
      )}
    </main>
  );
};

export default App;
