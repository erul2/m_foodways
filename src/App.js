import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RestaurantMenus from "./pages/RestaurantMenus";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => setIsLogin(true);
  const handleLogout = () => setIsLogin(false);
  return (
    <Router>
      <Navbar isLogin={isLogin} login={handleLogin} logout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant-menus/" element={<RestaurantMenus />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
