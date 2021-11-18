import React from "react";
import { Container, Col } from "react-bootstrap";
import cssMod from "./RestaurantNear.module.css";

function RestaurantNear(props) {
  return (
    <Col>
      <div className="bg-body rounded align-items-center p-2 pb-3">
        <div className="p-1">
          <img
            src={`/img/foods/${props.img}`}
            alt=""
            className={cssMod.restoImg}
          />
        </div>
        <h6 className={`${cssMod.name} mt-3 ms-2`}>{props.name}</h6>
        <span className={`${cssMod.distance} ms-2`}>{props.distance} KM</span>
      </div>
    </Col>
  );
}

export default RestaurantNear;
