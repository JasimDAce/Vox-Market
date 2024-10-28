import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      
   
    </>
  );
};

export default Layout;
