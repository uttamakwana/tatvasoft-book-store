import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  BooksPage,
  Register,
  NotFound,
  Login,
  Admin,
} from "../pages/index.js";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
