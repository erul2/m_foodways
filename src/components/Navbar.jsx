import React, { useState } from "react";
import { Link } from "react-router-dom";
import cssMod from "./Navbar.module.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Modal,
  Form,
  FloatingLabel,
} from "react-bootstrap";

function AfterLogin(props) {
  return (
    <>
      {" "}
      <Link to="/cart-order" className="position-relative">
        <img src="/icon/shopping-basket.svg" alt="cart" />{" "}
        <span
          className={`position-absolute translate-middle badge rounded-pill bg-danger ${cssMod.badge}`}
        >
          2
        </span>
      </Link>
      <NavDropdown
        title={
          <img
            src="/img/avatar/andi-circle.png"
            alt="icon"
            width="40"
            height="40"
          />
        }
        id="basic-nav-dropdown"
        align="end"
      >
        <Link
          to="/profile"
          className="dropdown-item my-3 d-flex align-items-center"
        >
          <img src="/icon/user.svg" width="30px" />
          <span className={cssMod.dropdownItem}>Profile Partner</span>
        </Link>
        <Link
          to="/add-product"
          className="dropdown-item my-3 d-flex align-items-center"
        >
          <img src="/icon/product.svg" width="30px" />
          <span className={cssMod.dropdownItem}>Add Product</span>
        </Link>
        <NavDropdown.Divider />{" "}
        <NavDropdown.Item onClick={props.logout}>
          <img src="/icon/logout.svg" width="30px" />
          <span className={cssMod.dropdownItem}>Logout</span>
        </NavDropdown.Item>{" "}
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
            <button className={cssMod.modalBtn}>Register</button>
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
    <Navbar expand="md" className={cssMod.navbar}>
      <Container>
        <Link to="/" className={`${cssMod.navBrand} text-decoration-none`}>
          WaysFood
          <img
            alt=""
            src="/icon/logoicon.svg"
            width="40"
            height="40"
            className="d-inline-block align-top ms-2"
          />
        </Link>
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
