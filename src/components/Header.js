import React from "react";
import { Image } from "react-bootstrap";
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
          <Link>Rólunk</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
