import React from "react";
import { popularResto, nearResto } from "../Data";

import PopularRestaurant from "../components/Popular";
import RestaurantNear from "../components/Near";
import Hero from "../components/Hero";

import { Container } from "react-bootstrap";
import cssMod from "./Home.module.css";

function Home() {
  document.title = "Ways Food";

  return (
    <>
      <Hero />
      <Container className="px-xs-1 px-md-3 px-xl-5">
        <Container className="mt-5 py-5">
          <h4 className={`${cssMod.title} mb-4`}>Popular Restaurant</h4>
          <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
            {popularResto().map((resto) => (
              <PopularRestaurant
                img={resto.img}
                name={resto.name}
                id={resto.id}
                distance={1}
              />
            ))}
          </div>
        </Container>
        <Container className="mt-5 pb-5">
          <h4 className={`${cssMod.title} mb-4`}>Restaurant Near You</h4>
          <div className="row row-cols-2 row-cols-lg-4 g-3 g-lg-4">
            {nearResto().map((resto) => (
              <RestaurantNear
                img={resto.img}
                name={resto.name}
                id={resto.id}
                distance={1}
              />
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
}

export default Home;
