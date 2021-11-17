import React, { UseState } from "react";
import "./Navbar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function AfterLogin() {
  return (
    <>
      <img src="/icon/shopping-basket.svg" alt="cart" />
      <NavDropdown
        title={<img src="/avatar/User.png" alt="icon" width="60" height="60" />}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Profile Partner</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Add Product</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

function BeforeLogin() {
  return (
    <>
      <button className="navbtn">Login</button>
      <button className="navbtn">Register</button>
    </>
  );
}

function NavBar(props) {
  return (
    <Navbar bg="warning" dark expand="md">
      <Container>
        <Navbar.Brand href="#home" className="navbrand">
          WaysFood
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
          {!props.isLogin ? <BeforeLogin /> : <AfterLogin />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
