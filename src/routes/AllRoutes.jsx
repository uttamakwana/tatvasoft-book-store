import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, NotFound, Login } from "../pages/index.js";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
