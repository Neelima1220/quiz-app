import React, { useState, createContext, useContext } from 'react';

const CaseContext = createContext(null);

export const CaseContextProvider = ({ children }) => {
  const [sel, setSel] = useState('na');
  const handleChange = (e) => {
    console.log(e.target.value);
    setSel(e.target.value);
  };

  return (
    <CaseContext.Provider value={{ sel, setSel, handleChange }}>
      {children}
    </CaseContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CaseContext);
};
