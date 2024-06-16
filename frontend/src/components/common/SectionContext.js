import React, { createContext, useContext, useState } from "react";

// Tworzymy kontekst
const SectionContext = createContext();

// Hook do łatwego użycia kontekstu
export const useSection = () => useContext(SectionContext);

// Komponent dostarczający kontekst
export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState("detailing");

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};
