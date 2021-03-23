import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavbarInformation() {
  const styles = {
    body: {
      backgroundColor: "#A9D0F5",
      height: 50,
    },
    logo: {
      marginLeft: 30,
      color: "#00509D",
      textAlign: "center",
    },
    title: {
      color: "#00509D",
      paddingLeft: 50,
      fontFamily: "sans-serif",
    },
    button: {
      marginRight: 60,
    },
    buttonContent1: {
      marginLeft: 30,
      borderRadius: 0,
      borderColor: "#00509D",
      color: "#ffff",
      backgroundColor: "#00509D",
    },
  };

  const history = useHistory();
  const event = useSelector((state) => state.event.event);

  const handleEdit = () => {
    history.push(`/update-event/${event.event[0].id}`);
  };

  const handleRecipient = () => {
    history.push(`/${event.event[0].id}/recipients`);
  };

  return (
    <>
      <Navbar style={styles.body} className="justify-content-between">
        <Nav className="mr-auto">
          <Navbar.Brand>
            <h5 style={styles.logo}>{event.event && event.event[0].title}</h5>
          </Navbar.Brand>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link style={styles.title} onClick={handleEdit}>
            Edit event
          </Nav.Link>
          <Nav.Link style={styles.title} href="#features">
            Certificate design
          </Nav.Link>
          <Nav.Link style={styles.title} onClick={handleRecipient}>
            Recipients
          </Nav.Link>
        </Nav>
        <Nav style={styles.button}>
          <Button style={styles.buttonContent1} variant="outline-primary">
            Send certificate
          </Button>
        </Nav>
      </Navbar>
    </>
  );
}
