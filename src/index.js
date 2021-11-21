import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userSession } from "./Data";

import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import RestaurantMenus from "./pages/RestaurantMenus";
import CartOrder from "./pages/CartOrder";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import AddProduct from "./pages/AddProduct";
import IncomeTransaction from "./pages/IncomeTransaction";

const status = userSession === null ? 0 : userSession.status;
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        {status == 0 ? (
          <Route index element={<Home />} />
        ) : (
          <Route index element={<IncomeTransaction />} />
        )}

        <Route path="restaurant-menus/:id" element={<RestaurantMenus />} />
        <Route path="cart-order" element={<CartOrder />} />
        <Route path="profile" element={<Profile />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="add-product" element={<AddProduct />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404 Page Not Pound!</p>
          </main>
        }
      />
    </Routes>
  </Router>,
  document.getElementById("root")
);
