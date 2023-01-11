import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Form/Login";
import SignUp from "../Form/SignUp";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import GridComponent from "./GridComponent";

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<GridComponent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
