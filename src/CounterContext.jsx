
import React, { useState, useContext, createContext } from "react";

// 1. Create Context
export const CounterContext = createContext();

// 2. Create Provider
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }

  function reset(){
    setCount(0);
  }


  return (
    <CounterContext.Provider value={{count,increment,decrement,reset}}>
      {children}
    </CounterContext.Provider>
  );
};
