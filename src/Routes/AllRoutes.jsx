import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home, CertificatePage } from "../Pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificate/:candidateName" element={<CertificatePage />} />
    </Routes>
  );
};
