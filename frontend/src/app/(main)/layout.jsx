import React from "react";
import Navbar from "./NewNavbar";




const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      
   
    </>
  );
};

export default Layout;
