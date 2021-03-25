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

  const handleTemplate = () => {
    history.push(`/upload-template/${event.event[0].id}`);
  };

  const handleInformation = () => {
    history.push(`/event-information/${event.event[0].id}`);
  };

  return (
    <>
      <Navbar style={styles.body} className="justify-content-between">
        <Nav className="mr-auto">
          <a onClick={handleInformation}>
            <h5 style={styles.logo}>{event.event && event.event[0].title}</h5>
          </a>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link style={styles.title} onClick={handleEdit}>
            Edit event
          </Nav.Link>
          <Nav.Link style={styles.title} onClick={handleRecipient}>
            Recipients
          </Nav.Link>
        </Nav>
        <Nav style={styles.button}>
          <Button
            style={styles.buttonContent1}
            onClick={handleTemplate}
            variant="outline-primary"
          >
            Send certificate
          </Button>
        </Nav>
      </Navbar>
    </>
  );
}
