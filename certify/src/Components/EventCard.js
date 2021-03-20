import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

import img from "../assets/sertifikat.png";

export default function EventCard() {
  const styles = {
    card: {
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 30,
    },
    container: {
      padding: 10,
    },
    image: {
      width: 150,
    },
    button: {
      borderRadius: 0,
      color: "#ffff",
      backgroundColor: "#00509D",
      width: 70,
    },
    title: {
      paddingTop: 40,
      paddingLeft: 70,
    },
  };

  return (
    <Card style={styles.card}>
      <Container style={styles.container}>
        <Row>
          <Col>
            <img style={styles.image} src={img} alt="" />
          </Col>
          <Col style={styles.title}>
            <h5>Event Name</h5>
          </Col>
          <Col style={styles.title}>
            <h5>Mar 31, 2021</h5>
          </Col>
          <Col style={styles.title}>
            <h5>Participants: 100</h5>
          </Col>
          <Col style={styles.title}>
            <Button style={styles.button} variant="outline-primary">
              Edit
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
