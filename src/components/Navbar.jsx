import React, { useState } from "react";
import cssMod from "./Navbar.module.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Modal,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";

function AfterLogin(props) {
  return (
    <>
      {" "}
      <img src="/icon/shopping-basket.svg" alt="cart" />{" "}
      <NavDropdown
        title={<img src="/avatar/User.png" alt="icon" width="60" height="60" />}
        id="basic-nav-dropdown"
      >
        {" "}
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>{" "}
        <NavDropdown.Item href="#action/3.2">
          {" "}
          Profile Partner{" "}
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3 ">Add Product</NavDropdown.Item>
        <NavDropdown.Divider />{" "}
        <NavDropdown.Item onClick={props.logout}>Logout</NavDropdown.Item>{" "}
      </NavDropdown>
    </>
  );
}

function BeforeLogin() {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const handleLoginClose = () => setLoginShow(false);
  const handleLoginShow = () => setLoginShow(true);

  const handleRegisterClose = () => setRegisterShow(false);
  const handleRegisterShow = () => setRegisterShow(true);

  return (
    <>
      {" "}
      <button className={cssMod.navBtn} onClick={handleLoginShow}>
        Login
      </button>{" "}
      <button className={cssMod.navBtn} onClick={handleRegisterShow}>
        {" "}
        Register{" "}
      </button>
      {/* Modal Login*/}
      <Modal show={loginShow} onHide={handleLoginClose} centered>
        <Modal.Body className={`${cssMod.modalBody} px-5`}>
          <div className={cssMod.modalTitle}>Login</div>
          <Form>
            <FloatingLabel controlId="floatingPassword" label="Email">
              <Form.Control
                type="email"
                placeholder="Email"
                className={cssMod.modalInput}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                className={cssMod.modalInput}
              />
            </FloatingLabel>
            <button className={cssMod.modalBtn}>Login</button>
            <p className="mt-3 text-center text-muted">
              Don't have an account ? Click{" "}
              <a
                href="#"
                className="fw-bold text-decoration-none link-secondary"
                onClick={() => {
                  handleLoginClose();
                  handleRegisterShow();
                }}
              >
                Here
              </a>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
      {/* Modal Register*/}
      <Modal show={registerShow} onHide={handleRegisterClose} centered>
        <Modal.Body className={`${cssMod.modalBody} px-5`}>
          <div className={cssMod.modalTitle}>Register</div>
          <Form>
            <FloatingLabel controlId="floatingPassword" label="Email">
              <Form.Control
                type="email"
                placeholder="Email"
                className={cssMod.modalInput}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                className={cssMod.modalInput}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingName" label="Full Name">
              <Form.Control
                type="text"
                placeholder="FullName"
                className={cssMod.modalInput}
              />
            </FloatingLabel>
            <Form.Select defaultValue="Gender" className={cssMod.modalInput}>
              <option disabled={true}>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
            <FloatingLabel controlId="floatingPhone" label="Phone">
              <Form.Control
                type="number"
                placeholder="Phone"
                className={cssMod.modalInput}
              />
            </FloatingLabel>
            <Form.Select className={cssMod.modalInput}>
              <option>As User</option>
              <option>As Partner</option>
            </Form.Select>
            <button className={cssMod.modalBtn}>Login</button>
            <p className="mt-3 text-center text-muted">
              Aleready have an account ? Click{" "}
              <a
                href="#"
                className="fw-bold text-decoration-none link-secondary"
                onClick={() => {
                  handleRegisterClose();
                  handleLoginShow();
                }}
              >
                Here
              </a>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

function NavBar(props) {
  return (
    <Navbar dark expand="md" className={cssMod.navbar}>
      <Container>
        <Navbar.Brand href="#home" className={cssMod.navBrand}>
          FoodWays
          <img
            alt=""
            src="/icon/logoicon.svg"
            width="40"
            height="40"
            className="d-inline-block align-top ms-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
          {!props.isLogin ? (
            <BeforeLogin />
          ) : (
            <AfterLogin logout={props.logout} />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
