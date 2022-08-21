import { Button, Container } from "@mui/material";

import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./common/Navbar";
import RouterApp from "./RouterApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </>
  );
}

export default App;
