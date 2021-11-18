import React from "react";
import cssMod from "./Hero.module.css";
import { Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <Container fluid className={`${cssMod.hero} pt-5`}>
      <Row className="ms-xl-5">
        <Col md={5} className="offset-lg-1 offset-xl-2 me-0 pe-0">
          <p className={cssMod.title}>
            Are You Hungry? <br /> Express Home Delivery
          </p>
          <Row>
            <Col md={3}>
              <div className={cssMod.line} />
            </Col>
            <Col md={8}>
              <p className={cssMod.summary}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="ms-0 p-0">
          <img src="/img/img-hero.png" alt="" width="408px" height="393px" />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
