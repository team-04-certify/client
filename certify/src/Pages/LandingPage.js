import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import img from "../assets/landing-page.png";

export default function LandingPage() {
  const styles = {
    image: {
      height: "70%",
      justifyContent: "end",
      marginTop: 20,
    },
    button: {
      borderRadius: 0,
      backgroundColor: "#00509D",
      color: "#ffff",
      marginTop: 20,
    },
    title: {
      fontWidth: "bold",
      marginTop: 130,
    },
  };

  return (
    <Container>
      <Row>
        <Col style={styles.title} sm={6}>
          <h1>No more worry</h1>
          <h1>about your certificate</h1>
          <p>Create, Send & Validate your event certificate</p>
          <Button style={styles.button} variant="outline-primary">
            Create certificate
          </Button>
        </Col>
        <Col sm={4}>
          <img style={styles.image} className="image" src={img} alt="" />
        </Col>
      </Row>
    </Container>
  );
}
