import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, NotFound } from "../pages/index.js";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
