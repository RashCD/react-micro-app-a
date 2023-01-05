import React, { useState } from "react";

export const GlobalStateContextLocal = React.createContext();

const GlobalStateProvider = ({ children }) => {
  const [globalCount, setGlobalCount] = useState(0);

  const toggleIncrement = () => {
    setGlobalCount((prev) => prev + 1);
  };

  const toggleDecrement = () => {
    setGlobalCount((prev) => prev - 1);
  };

  const value = { globalCount, toggleIncrement, toggleDecrement };

  return (
    <GlobalStateContextLocal.Provider value={value}>
      {children}
    </GlobalStateContextLocal.Provider>
  );
};

export default GlobalStateProvider;
