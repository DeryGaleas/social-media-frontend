import React from "react";
import "./App.css";
import Login from "./pages/Login/";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./router/AuthRequired";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <AppCanvas>
    <BrowserRouter>
      <AuthRequired>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthRequired>
    </BrowserRouter>
  </AppCanvas>
);

const AppCanvas = styled.div`
  height: 100%;
`;

export default App;
