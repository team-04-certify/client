import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

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
      textDecoration: "none",
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
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem("access_token");
    history.push("/");
  }

  return (
    <>
      <Navbar style={styles.body} className="justify-content-between">
        <Nav className="mr-auto">
          <Navbar.Brand>
            <Link to="/events">
              <h5 style={styles.logo}>Dashboard</h5>
            </Link>
          </Navbar.Brand>
        </Nav>
        <Nav style={styles.button}>
          <Nav.Link style={styles.title}>
            <Link to="/create-event" style={styles.title}>
              Create Event
            </Link>
          </Nav.Link>
          <Nav.Link style={styles.title} onClick={handleLogout}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
