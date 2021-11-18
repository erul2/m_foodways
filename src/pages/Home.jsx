import React from "react";
import Hero from "../components/Hero";
import PopularRestaurant from "../components/PopularRestaurant";
import RestaurantNear from "../components/RestaurantNear";

import { Container } from "react-bootstrap";
import cssMod from "./Home.module.css";

function Home() {
  return (
    <>
      <Hero />
      <Container className="mt-5 py-5">
        <h4 className={`${cssMod.title} mb-4`}>Popular Restaurant</h4>
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          <PopularRestaurant img="burgerking.png" name="Burger King" />
          <PopularRestaurant img="burgerking.png" name="Burger King" />
          <PopularRestaurant img="burgerking.png" name="Burger King" />
          <PopularRestaurant img="burgerking.png" name="Burger King" />
        </div>
      </Container>
      <Container className="mt-5 pb-5">
        <h4 className={`${cssMod.title} mb-4`}>Restaurant Near You</h4>
        <div className="row row-cols-2 row-cols-lg-4 g-3 g-lg-4">
          <RestaurantNear img="bensu.png" name="Geprek Bensu" distance={1} />
        </div>
      </Container>
    </>
  );
}

export default Home;
