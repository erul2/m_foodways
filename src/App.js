import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => setIsLogin(true);
  const handleLogout = () => setIsLogin(false);
  return (
    <>
      <Navbar isLogin={isLogin} login={handleLogin} logout={handleLogout} />
      <Outlet />
    </>
  );
}

export default App;
