import React, { useState, useEffect } from "react";
import Maps from "../components/Maps";
import OrderList from "../components/OrderList";
import cssMod from "./CartOrder.module.css";
import { getOrders, setQty, addOrder, deleteOrder } from "../Data";

import { Container, Row, Col, Modal, FormControl } from "react-bootstrap";

function CartOrder() {
  document.title = "Cart Order";
  const [mapShow, setMapShow] = useState(false);
  const handleMapClose = () => setMapShow(false);
  const handleMapShow = () => setMapShow(true);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const add = (id) => {
    console.log("add clicked");
    let newOrders = orders;
    for (let i = 0; i < newOrders.length; i++) {
      if (orders[i].id == id) {
        newOrders[i].qty += 1;
      }
    }
    setOrders(newOrders);
    console.log(orders);
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
            <div className={cssMod.btn} onClick={handleMapShow}>
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
                id={o.id}
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
              <tr className={cssMod.dividerGroup}>
                <td className={cssMod.divider} />
                <td className={cssMod.divider} />
              </tr>
              <tr>
                <td>Total</td>
                <td className={cssMod.right}>Rp 45.000</td>
              </tr>
            </table>
            <div
              className="mbtn"
              style={{
                width: "80%",
                marginLeft: "auto",
                height: "2.5rem",
                padding: ".5rem",
                marginTop: "5rem",
              }}
            >
              Order
            </div>
          </Col>
        </Row>
      </Container>
      <Modal size="xl" show={mapShow} onHide={handleMapClose} className="p-5">
        <Modal.Body>
          <Maps />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default CartOrder;
