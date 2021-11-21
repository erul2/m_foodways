import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLogin as getIslogin, login, userSession, logout } from "../Data";

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
  let navigate = useNavigate();

  return (
    <>
      {userSession.status == 0 ? (
        <Link to="/cart-order" className="position-relative">
          <img src="/icon/shopping-basket.svg" alt="cart" />{" "}
          <span
            className={`position-absolute translate-middle badge rounded-pill bg-danger ${cssMod.badge}`}
          >
            {props.cart}
          </span>
        </Link>
      ) : null}

      <NavDropdown
        title={
          <img
            src={`/img/avatar/${userSession.avatar}`}
            alt="icon"
            width="50"
            height="50"
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid var(--primary)",
            }}
          />
        }
        id="basic-nav-dropdown"
        align="end"
      >
        <NavDropdown.Item
          href="/profile"
          className="dropdown-item my-3 d-flex align-items-center"
        >
          <img src="/icon/user.svg" width="30px" height="30px" />
          <span className={cssMod.dropdownItem}>
            {userSession.status == 1 ? "Profile Partner" : "Profile"}
          </span>
        </NavDropdown.Item>
        {userSession.status == 1 ? (
          <NavDropdown.Item
            href="/add-product"
            className="dropdown-item my-3 d-flex align-items-center"
          >
            <img src="/icon/product.svg" width="30px" />
            <span className={cssMod.dropdownItem}>Add Product</span>
          </NavDropdown.Item>
        ) : null}
        <NavDropdown.Divider />{" "}
        <NavDropdown.Item
          onClick={() => {
            logout();
            navigate("/");
            window.location.reload();
          }}
        >
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

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    status: "",
  });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnLoginSubmit = (e) => {
    e.preventDefault();
    login(user.email, user.password);
    // props.login();
    window.location.reload();
    handleLoginClose();
  };

  const handleOnRegisterSubmit = (e) => {
    e.preventDefault();
    handleRegisterClose();
  };

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
          <Form onSubmit={handleOnLoginSubmit}>
            <FloatingLabel controlId="floatingLoginPassword" label="Email">
              <Form.Control
                onChange={handleOnChange}
                type="email"
                placeholder="Email"
                className={cssMod.modalInput}
                name="email"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                onChange={handleOnChange}
                type="password"
                placeholder="Password"
                className={cssMod.modalInput}
                name="password"
              />
            </FloatingLabel>
            <button type="submit" className={cssMod.modalBtn}>
              Login
            </button>
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
          <Form onSubmit={handleOnRegisterSubmit}>
            <FloatingLabel controlId="floatingPassword" label="Email">
              <Form.Control
                onChange={handleOnChange}
                type="email"
                placeholder="Email"
                className={cssMod.modalInput}
                name="email"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                onChange={handleOnChange}
                type="password"
                placeholder="Password"
                className={cssMod.modalInput}
                name="password"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingName" label="Full Name">
              <Form.Control
                onChange={handleOnChange}
                type="text"
                placeholder="FullName"
                className={cssMod.modalInput}
                name="name"
              />
            </FloatingLabel>
            <Form.Select defaultValue="Gender" className={cssMod.modalInput}>
              <option disabled={true}>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
            <FloatingLabel controlId="floatingPhone" label="Phone">
              <Form.Control
                onChange={handleOnChange}
                type="number"
                placeholder="Phone"
                className={cssMod.modalInput}
                name="phone"
              />
            </FloatingLabel>
            <Form.Select className={cssMod.modalInput}>
              <option>As User</option>
              <option>As Partner</option>
            </Form.Select>
            <button type="submit" className={cssMod.modalBtn}>
              Register
            </button>
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
  const [isLogin, setIsLogin] = useState(getIslogin);

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
          {isLogin ? <AfterLogin cart={props.cart} /> : <BeforeLogin />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
