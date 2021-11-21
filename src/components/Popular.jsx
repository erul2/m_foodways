import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import cssMod from "./Popular.module.css";

function PopularRestaurant(props) {
  return (
    <Link to={`/restaurant-menus/${props.id}`} className={cssMod.link}>
      <Col>
        <div className="bg-body rounded align-items-center">
          <img src={`/img/avatar/${props.img}`} alt="" className="py-3 px-2" />
          <span className={`${cssMod.name} ms-1`}>{props.name}</span>
        </div>
      </Col>
    </Link>
  );
}

export default PopularRestaurant;
