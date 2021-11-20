import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import cssMod from "./Profile.module.css";

function Profile() {
  return (
    <Container className="px-xs-1 px-md-3 px-xl-5 mt-5 pb-5">
      <Row>
        <Col md={7} xl={8} className="mb-sm-5 mb-lg-0">
          <h4 className="subtitle mb-4">My Profile</h4>
          <div className="d-flex">
            <div className="d-flex flex-column">
              <img
                className="mb-4"
                src="/img/avatar/andi.png"
                width="180px"
                height="221px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <Link to="/edit-profile" className="mbtn">
                <div>Edit Profile</div>
              </Link>
            </div>
            <div className="ms-4">
              <div className={cssMod.titleGroup}>
                <div className={cssMod.title}>Full Name</div>
                <div className={cssMod.value}>Andi</div>
              </div>
              <div className={cssMod.titleGroup}>
                <div className={cssMod.title}>Email</div>
                <div className={cssMod.value}>andi@gmail.com</div>
              </div>
              <div className={cssMod.titleGroup}>
                <div className={cssMod.title}>Phone</div>
                <div className={cssMod.value}>08123456789</div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={5} xl={4}>
          <h4 className="subtitle mb-4">History Transaction</h4>
          <Transaction
            name="Geprek Bensu"
            date="Saturday, 12 MArch 2021"
            total={45000}
            status="1"
          />
        </Col>
      </Row>
    </Container>
  );
}

function Transaction(props) {
  const day = "Saturday";
  const date = "12 March 2022";
  return (
    <Row className={cssMod.trxGroup}>
      <Col xs={8} md={6} lg={7} className="d-flex flex-column">
        <div className={cssMod.trxName}>{props.name}</div>
        <div>
          <span className={cssMod.trxDay}>{day}, </span> {date}
        </div>
        <div className={cssMod.trxTotal}>Total :{props.total}</div>
      </Col>
      <Col xs={4} md={6} lg={5} className="d-flex flex-column">
        <div className={`d-flex align-items-center`}>
          <div className={cssMod.trxLogo}>WaysFood </div>
          <img src="/icon/logoicon.svg" />
        </div>
        <div
          className={cssMod.trxStatus}
          style={{
            color: "var(--success)",
            background: "var(--bgsuccess)",
          }}
        >
          Finished
        </div>
      </Col>
    </Row>
  );
}

export default Profile;
