import React, { useRef, useEffect } from "react";
import { getOrders } from "./Data";
import { Outlet } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";

function App() {
  const cart = useRef(null);

  useEffect(() => {
    let order = getOrders().length;
    if (cart.current) return;
    cart.current = order;
  });

  return (
    <>
      <Navbar cart={cart.current} />
      <Outlet />
    </>
  );
}

export default App;
