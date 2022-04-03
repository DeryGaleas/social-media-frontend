import React from "react";
import "./App.css";
import Login from "./pages/Login/";
import styled from "styled-components";

const App = () => (
  <AppCanvas>
    <Login />
  </AppCanvas>
);

const AppCanvas = styled.div`
  height: 100%;
`;

export default App;
