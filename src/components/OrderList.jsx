import React from "react";
import { Row, Col } from "react-bootstrap";
import cssMod from "./OrderList.module.css";

function OrderList(props) {
  return (
    <div className={`${cssMod.list} ms-1 align-items-center d-flex`}>
      <div className="p-0">
        <img src={`/img/foods/${props.img}`} className={cssMod.listImg} />
      </div>
      <div xs={6} className="flex-grow-1 ms-3">
        <div className={cssMod.name}>{props.name}</div>
        <div className={cssMod.btnGroup}>
          <div className={cssMod.btn}>-</div>
          <div className={cssMod.qty}>{props.qty}</div>
          <div className={cssMod.btn}>+</div>
        </div>
      </div>
      <div xs={3} className={`${cssMod.price} d-flex flex-column `}>
        Rp {props.price}
        <img
          src="/icon/trash.svg"
          width="20px"
          height="20px"
          className={`ms-auto mt-2 ${cssMod.trash}`}
        />
      </div>
    </div>
  );
}

export default OrderList;
