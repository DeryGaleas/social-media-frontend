import React from "react";
import "./App.css";
import Login from "./pages/Login/";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./router/AuthRequired";

const App = () => (
  <AppCanvas>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRequired>
              <div>Dash</div>
            </AuthRequired>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </AppCanvas>
);

const AppCanvas = styled.div`
  height: 100%;
`;

export default App;
