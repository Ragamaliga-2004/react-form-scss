import React, { useState, useContext, createContext } from "react";

// 1. Create Context
export const UserContext = createContext();

// 2. Create Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(name) {
    setUser({ name });
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
