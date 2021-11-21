import React from "react";
import { useParams } from "react-router-dom";
import { getMenus, getRestoName } from "../Data";

import { Container } from "react-bootstrap";
import Menu from "../components/Menu";
import cssMod from "./RestaurantMenus.module.css";

function RestaurantMenus() {
  const pId = parseInt(useParams().id);
  document.title = `Ways Food - ${getRestoName(pId)}`;
  return (
    <Container className="px-xs-1 px-md-3 px-xl-5 mt-5 pb-5">
      <h4 className={`${cssMod.title} mb-4`}>{getRestoName(pId)}</h4>
      <div className="row row-cols-2 row-cols-lg-4 gx-3 gx-lg-4">
        {getMenus(pId) == undefined ? (
          <div className="d-flex mt-5 pt-5">
            <h2>Sorry, Menus are not available</h2>
          </div>
        ) : (
          getMenus(pId).map((menu) => (
            <Menu
              id={menu.id}
              img={menu.img}
              name={menu.name}
              price={menu.price}
            />
          ))
        )}
      </div>
    </Container>
  );
}

export default RestaurantMenus;
