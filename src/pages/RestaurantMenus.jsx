import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../components/Menu";
import cssMod from "./RestaurantMenus.module.css";

function RestaurantMenus() {
  return (
    <Container className="mt-5 pb-5">
      <h4 className={`${cssMod.title} mb-4`}>Geprek Bensu, Menus</h4>
      <div className="row row-cols-2 row-cols-lg-4 gx-3 gx-lg-4">
        <Menu img="bensu.png" name="Paket Geprek" price="12.000" />
        <Menu img="bensu.png" name="Paket Geprek" price="12.000" />
        <Menu img="bensu.png" name="Paket Geprek" price="12.000" />
        <Menu img="bensu.png" name="Paket Geprek" price="12.000" />
        <Menu img="bensu.png" name="Paket Geprek" price="12.000" />
        <Menu img="bensu.png" name="Paket Geprek" price="12.000" />
        <Menu img="bensu.png" name="Paket Geprek" price="12.000" />
        <Menu img="bensu.png" name="Paket Geprek" price="12.000" />
      </div>
    </Container>
  );
}

export default RestaurantMenus;
