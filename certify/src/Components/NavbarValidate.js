import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import img from "../assets/Logo-putih.svg";

export default function NavbarHome() {
  const styles = {
    body: {
      backgroundColor: "#00509D",
    },
  };

  return (
    <>
      <Navbar
        style={styles.body}
        className="navbar-validate justify-content-between"
      >
        <Nav style={styles.logo} className="mr-auto">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                src={img}
                width="100"
                // height="30"
                className="d-inline-block align-top"
                alt="Certify logo"
              />
            </Link>
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </>
  );
}
