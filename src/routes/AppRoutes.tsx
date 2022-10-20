import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../components/Header";

import Home from "../pages/Home";
import Professional from "../pages/Professional";
import ScrollToTop from "../utils/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional" element={<Professional />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
