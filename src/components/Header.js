import React from "react";
import { Image, Button, Dropdown, DropdownToggle, Container, Navbar, Offcanvas, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.PNG";
import menuIcon from "../icons/menuIcon.png"
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header({ className }) {
  return (
    <header id="Header" className={className}>
      <Navbar expand="md">
          <Container fluid>
            <Navbar.Brand href="/">
              <Image src={logo} />
              SOS Elevator
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasArea" />
            <Navbar.Offcanvas
              id="offcanvasArea"
              aria-labelledby="offcanvasAreaLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasAreaLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link to="/About">Rólunk</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id="dropdown"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </header>
  );
}

export default Header;
