"use client";

import { useRouter } from "next/navigation";

const { createContext, useContext, useState, useEffect } = require("react");

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const user = (localStorage.getItem("Usertoken"));
    setLoggedIn(user || false);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("Usertoken");
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <AppContext.Provider value={{ logout, loggedIn, setLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
