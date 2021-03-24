import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

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
      borderRadius: 0,
      borderColor: "#00509D",
      backgroundColor: "#ffff",
      color: "#00509D",
      textDecoration: "none",
    },
    buttonContent2: {
      marginLeft: 30,
      borderRadius: 0,
      borderColor: "#00509D",
      backgroundColor: "#00509D",
      color: "#ffff",
    },
    buttonTitle: {
      textDecoration: "none",
    },
  };

  const location = useLocation();
  const path = location.pathname

  return (
    <>
      <Navbar className="navbar-home justify-content-between">
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
        {
            path === '/register' || path === '/'?
            <Link style={styles.buttonContent1} to="/login">
              <Button style={styles.buttonContent1} variant="outline-primary">
                Login
              </Button>
            </Link>:
            null
          }
          {
            path === '/login' || path === '/'?
            <Link style={styles.buttonTitle} to="/register">
              <Button style={styles.buttonContent2} variant="outline-primary">
                Register
              </Button>
            </Link>:
            null
          }
        </Nav>
      </Navbar>
    </>
  );
}
