import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

import img from "../assets/logo.svg";

export default function NavbarHome() {
  const styles = {
    logo: {
      marginLeft: 30,
    },
    title: {
      color: "black",
      paddingLeft: 50,
      fontFamily: "sans-serif",
    },
    button: {
      marginRight: 30,
    },
    buttonContent1: {
      marginLeft: 30,
      borderRadius: 0,
      borderColor: "#00509D",
      backgroundColor: "#ffff",
      color: "#00509D",
    },
    buttonContent2: {
      marginLeft: 30,
      borderRadius: 0,
      borderColor: "#00509D",
      backgroundColor: "#00509D",
      color: "#ffff",
    },
  };

  return (
    <>
      <Navbar className="justify-content-between">
        <Nav style={styles.logo} className="mr-auto">
          <Navbar.Brand href="#home">
            <img
              src={img}
              width="100"
              // height="30"
              className="d-inline-block align-top"
              alt="Certify logo"
            />
          </Navbar.Brand>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link style={styles.title} href="#home">
            About
          </Nav.Link>
          <Nav.Link style={styles.title} href="#features">
            How it's works
          </Nav.Link>
          <Nav.Link style={styles.title} href="#pricing">
            Templates
          </Nav.Link>
        </Nav>
        <Nav style={styles.button}>
          <Button style={styles.buttonContent1} variant="outline-primary">
            Login
          </Button>
          <Button style={styles.buttonContent2} variant="outline-primary">
            Register
          </Button>
        </Nav>
      </Navbar>
    </>
  );
}
