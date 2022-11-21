import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "../components/Header";

import Home from "../pages/Home";
import Curriculum from "../pages/Curriculum";
import Professional from "../pages/Professional";
import ScrollToTop from "../utils/ScrollToTop";
import Emulator from "../pages/Emulator";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/emulador" element={<Emulator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
