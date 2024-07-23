import React, { createContext, useContext, useState, useEffect } from "react";

const SectionContext = createContext();

export const useSection = () => useContext(SectionContext);

export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState(() => {
    const savedSection = localStorage.getItem("section");
    return savedSection ? savedSection : "detailing";
  });

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
};
