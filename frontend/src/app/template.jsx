"use client";
import { AppProvider } from "@/context/AppContext";
import React from "react";

const Template = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default Template;
