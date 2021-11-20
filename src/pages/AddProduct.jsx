import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import cssMod from "./AddProduct.module.css";

function AddProduct() {
  return (
    <Container className="px-xs-1 px-md-3 px-xl-5 mt-5 pb-5">
      <h4 className="subtitle mb-4">Add Product</h4>
      <form>
        <Row>
          <Col xs={7} lg={9} xl={10}>
            <input type="text" placeholder="Title" className={cssMod.input} />
          </Col>
          <Col xs={5} lg={3} xl={2}>
            <label
              htmlFor="inputfile"
              className={`${cssMod.input} d-flex justify-content-between`}
            >
              <div>Attach Image</div> <img src="/icon/attach.svg" />
            </label>
            <input id="inputfile" type="file" style={{ display: "none" }} />
          </Col>
          <Col xs={12}>
            <input type="number" placeholder="Price" className={cssMod.input} />
          </Col>
          <Col xs={5} lg={3} className="ms-auto">
            <div className={`mbtn ${cssMod.btn}`}>Save</div>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default AddProduct;
