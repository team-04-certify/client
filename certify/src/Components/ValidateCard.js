import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import img from "../assets/validated.png";

export default function ValidateCard({ recipient }) {
  const styles = {
    card: {
      margin: 50,
    },
    container: {
      padding: 40,
    },
    image: {
      width: 450,
    },
    button: {
      borderRadius: 0,
      color: "#ffff",
      backgroundColor: "#00509D",
      width: 70,
    },
    title: {
      paddingTop: 70,
      paddingLeft: 30,
    },
  };
  console.log(recipient, "ininininini");

  if (recipient.Event) {
    return (
      <Card style={styles.card}>
        <Container style={styles.container}>
          <Row>
            <Col style={styles.title}>
              <h5>Organizer</h5>
              <h5>Event Name</h5>
              <h5>Certificate Number</h5>
              <h5>Name</h5>
            </Col>
            <Col style={styles.title}>
              <h5>{recipient.Event.Organizer.name}</h5>
              <h5>{recipient.Event.title}</h5>
              <h5>{recipient.certificateNumber}</h5>
              <h5>{recipient.name}</h5>
            </Col>
            <Col>
              <img style={styles.image} src={img} alt="" />
            </Col>
          </Row>
        </Container>
      </Card>
    );
  } else {
    return <p>Loading...</p>;
  }
}
