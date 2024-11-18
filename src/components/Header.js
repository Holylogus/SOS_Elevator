import React from "react";
import { Image, Button } from "react-bootstrap";
import logo from "../images/IMG_0730.PNG";

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
          <Link to="Services">Szolgáltatások</Link>
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
