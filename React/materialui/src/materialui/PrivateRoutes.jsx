import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Form/Login";
import SignUp from "../Form/SignUp";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import CreateUser from "./CreateUser";
import GridComponent from "./GridComponent";
import Users from "./Users";

const PrivateRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<GridComponent />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Routes>
    </>
  );
};

export default PrivateRoutes;
