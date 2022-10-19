import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../components/Header";

import Home from "../pages/Home";
import Professional from "../pages/Professional";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
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
