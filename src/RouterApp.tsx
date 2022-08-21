
import React from "react";
import { Routes, Route } from "react-router-dom";
import RouterLayout from "./common/RouterLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";


const RouterApp: React.FC<{}> = () => {
  return (
    <Routes>

      <Route path="/" element={<RouterLayout   />} >
      <Route path="/" element={<Home   />} />
      <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/logins" element={<div> hello</div>} />

      
    </Routes>
  );
};

export default RouterApp;
