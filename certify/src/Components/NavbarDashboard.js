import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarDashboard() {
  const styles = {
    body: {
      backgroundColor: "#00509D",
      height: 60,
    },
    logo: {
      marginLeft: 30,
      fontWidth: "bold",
      color: "#ffff",
    },
    title: {
      paddingLeft: 50,
      fontFamily: "sans-serif",
      color: "#ffff",
    },
    button: {
      marginRight: 30,
    },
    buttonContent1: {
      marginLeft: 30,
      borderRadius: 0,
      borderColor: "#00509D",
      color: "#00509D",
    },
    buttonContent2: {
      marginLeft: 30,
      borderRadius: 0,
      borderColor: "#00509D",
      backgroundColor: "00509D",
      // color: "#ffff",
    },
  };

  return (
    <>
      <Navbar style={styles.body} className="justify-content-between">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">
            <h5 style={styles.logo}>Dashboard</h5>
          </Navbar.Brand>
        </Nav>
        <Nav style={styles.button}>
          <Nav.Link style={styles.title} href="#home">
            Create Event
          </Nav.Link>
          <Nav.Link style={styles.title} href="#features">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}