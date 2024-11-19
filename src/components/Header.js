import React from "react";
import { Image, Button, Dropdown, DropdownToggle } from "react-bootstrap";
import logo from "../images/logo.PNG";

import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="Header">
      <nav className="navigation">
        <div className="brand">
          <Image src={logo} rounded />
          <Link to="/">
            <strong>SOS Elevator</strong>
          </Link>
        </div>
        <div className="pageroutes">
          <Link to="/About">Rólunk</Link>
          <Dropdown>
            <DropdownToggle as="a" className="dropdownToggle" href="#">
              Szolgáltatások
            </DropdownToggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/Services#karbantartas">Karbantartás</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Services#serviz">Szervíz</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Services#modernizacio">Modernizáció</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Services#hibaelharitas">Hibaelhárítás</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Services#tanacsadas">Tanácsadás</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="Contact">Kapcsolat</Link>
          <Button variant="primary" onClick={() => console.log("Primary")}>
            Ajánlatkérés
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
