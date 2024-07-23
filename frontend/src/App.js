import React, { useEffect, useState } from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import Home from "./components/pages/Detaling/Home/Home";
import About from "./components/pages/CommonPages/About/About";
import Contact from "./components/pages/CommonPages/Contact/Contact";
import Offer from "./components/pages/CommonPages/Offer/Offer";
import Realization from "./components/pages/Detaling/Realization/Realization";
import { Routes, Route, useLocation } from "react-router-dom";
import WelcomePages from "./components/pages/CommonPages/WelcomePages/WelcomePages";
import { SectionProvider } from "./components/common/SectionContext";
import NotFound from "./components/pages/CommonPages/NotFound/NotFound";
import Preloader from "./components/common/Preloader/Preloader";
import SingleRealization from "./components/pages/Detaling/SingleRealization/SingleRealization";
import ScrollToTop from "./utils/ScrollToTop";
import { useDispatch } from "react-redux";
import { loadDetRequest } from "./redux/Detailing/detailingReducer";
import Home2 from "./components/pages/CarsExport/Home/Home2";
import Realization2 from "./components/pages/CarsExport/Realization/Realization2";
import SingleRealization2 from "./components/pages/CarsExport/SingleRealization/SingleRealization2";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDetRequest());
  }, [dispatch]);

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
                  <Route
                    path="/realization-detaling"
                    element={<Realization />}
                  />
                  <Route
                    path="/realization-detaling/:id"
                    element={<SingleRealization />}
                  />

                  {/* Wspólne */}
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/offer" element={<Offer />} />
                  <Route path="*" element={<NotFound />} />

                  {/* SPROWADZANIE SAMOCHODÓW */}
                  <Route path="/home-cars-to-order" element={<Home2 />} />
                  <Route
                    path="/realization-cars-to-order"
                    element={<Realization2 />}
                  />
                  <Route
                    path="/realization-cars-to-order/:id"
                    element={<SingleRealization2 />}
                  />
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
