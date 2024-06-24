import React, { useEffect, useState } from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Home from "./components/pages/Detaling/Home/Home";
import About from "./components/pages/Detaling/About/About";
import Contact from "./components/pages/Detaling/Contact/Contact";
import Offer from "./components/pages/Detaling/Offer/Offer";
import Realization from "./components/pages/Detaling/Realization/Realization";
import { Routes, Route, useLocation } from "react-router-dom";
import WelcomePages from "./components/pages/WelcomePages/WelcomePages";
import { SectionProvider } from "./components/common/SectionContext";
import NotFound from "./components/pages/NotFound/NotFound";
import Preloader from "./components/common/Preloader/Preloader";
import SingleRealization from "./components/pages/Detaling/SingleRealization/SingleRealization";
import ScrollToTop from "./utils/ScrollToTop";
const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <SectionProvider>
      {loading ? (
        <Preloader />
      ) : (
        <ScrollToTop>
          <>
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
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/offer-detaling" element={<Offer />} />
                  <Route
                    path="/realization-detaling"
                    element={<Realization />}
                  />
                  <Route
                    path="/realization-detaling/:id"
                    element={<SingleRealization />}
                  />
                  <Route path="*" element={<NotFound />} />
                  {/* SPROWADZANIE SAMOCHODÓW */}
                </Routes>
              </MainLayout>
            )}
          </>
        </ScrollToTop>
      )}
    </SectionProvider>
  );
};

export default App;
