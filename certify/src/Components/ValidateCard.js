import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import img from "../assets/validated.png";

export default function ValidateCard() {
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
            <h5>Google</h5>
            <h5>Menuju Google yg budiman</h5>
            <h5>087654321</h5>
            <h5>Dia</h5>
          </Col>
          <Col>
            <img style={styles.image} src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
