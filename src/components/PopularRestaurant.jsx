import React from "react";
import { Col } from "react-bootstrap";
import cssMod from "./PopularRestaurant.module.css";

function PopularRestaurant(props) {
  return (
    <Col>
      <div className="bg-body rounded align-items-center">
        <img src={`/img/partners/${props.img}`} alt="" className="py-3 px-2" />
        <span className={`${cssMod.name} ms-1`}>{props.name}</span>
      </div>
    </Col>
  );
}

export default PopularRestaurant;
