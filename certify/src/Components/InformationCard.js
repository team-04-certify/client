import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import img from "../assets/sertifikat.png";

export default function InformationCard({ event }) {
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
  // console.log(event);
  let dateString = new Date(event.date).toLocaleDateString("en-US");

  return (
    <Card style={styles.card}>
      <Container style={styles.container}>
        <Row>
          <Col style={styles.title}>
            <h5>Title</h5>
            <h5>Date</h5>
            <h5>Type</h5>
            <h5>Recipients</h5>
          </Col>
          <Col style={styles.title}>
            <h5>{event.title}</h5>
            <h5>{dateString}</h5>
            <h5>{event.type}</h5>
            <h5>100</h5>
          </Col>
          <Col>
            <img style={styles.image} src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
