import React, { useState } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import OrderList from "../components/OrderList";
import cssMod from "./CartOrder.module.css";

function CartOrder() {
  const [orders, setOrders] = useState([
    {
      img: "bensu.png",
      name: "Paket Geprek",
      qty: 1,
      price: 15000,
    },
    {
      img: "pecelayam.png",
      name: "Paket pecel ayam",
      qty: 1,
      price: 15000,
    },
  ]);

  const add = (i) => {
    console.log("add clicked");
    orders[i].qty += 1;
    console.log(orders);
    setOrders(orders);
    //setOrders[i].qty = orders[i].qty + 1;
  };
  const sub = () => {
    console.log("sub clicked");
    //setOrders[i].qty = orders[i].qty - 1;
  };

  return (
    <Container className="px-xs-1 px-md-3 px-xl-5">
      <Container className="mt-5 pb-5">
        <h4 className="subtitle mb-4">Geprek Bensu</h4>
        <h6 className={cssMod.description}>Delivery Location</h6>
        <Row>
          <Col xs={8} md={9} xl={10}>
            <FormControl type="text" />
          </Col>
          <Col xs={4} md={3} xl={2}>
            <div className={cssMod.btn}>
              Select On Map
              <img
                src="/icon/map.svg"
                width="20px"
                height="20px"
                className="ms-2"
              />
            </div>
          </Col>
          <span className={cssMod.description}>Review Your Order</span>
          <Col xs={12} md={8}>
            <div className={cssMod.divider} />
            {orders.map((o) => (
              <OrderList
                add={add}
                sub={sub}
                img={o.img}
                name={o.name}
                qty={o.qty}
                price={o.price}
              />
            ))}
          </Col>
          <Col xs={12} md={4} className={`${cssMod.divider} py-3 px-0`}>
            <table className={cssMod.table}>
              <tr>
                <td>Subtotal</td>
                <td className={cssMod.right}>Rp 35.000</td>
              </tr>
              <tr>
                <td>Qty</td>
                <td className={`${cssMod.qty}`}>2</td>
              </tr>
              <tr>
                <td>Shipping Cost</td>
                <td className={cssMod.right}>Rp 35.000</td>
              </tr>
              <tr>
                <td>Total</td>
                <td className={cssMod.right}>Rp 45.000</td>
              </tr>
            </table>
            <div className={cssMod.btnOrder}>Order</div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CartOrder;
