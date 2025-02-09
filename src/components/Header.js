import React from "react";
import { Image, Container, Navbar, Offcanvas, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.PNG";
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
                  SOS Elevator
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav >
                  <NavDropdown
                    title="Szolgáltatások"
                    id="dropdown"
                  >
                    <NavDropdown.Item as={HashLink} to="/Services#karbantartas" >Karbantartás</NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Services#szerviz">
                    Szervíz
                    </NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Services#modernizacio">
                    Modernizáció
                    </NavDropdown.Item>
                    <NavDropdown.Item as={HashLink} to="/Services#tanacsadas">
                    Tanácsadás
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link><Link to="/About">Rólunk</Link></Nav.Link>
                  <Nav.Link as={HashLink}><Link to="/#Contact">Kapcsolat</Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </header>
  );
}

export default Header;
