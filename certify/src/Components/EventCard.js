import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import img from "../assets/sertifikat.png";

export default function EventCard({ title, date, type, event, participants }) {
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
  const history = useHistory();

  let dateString = new Date(date).toLocaleDateString(undefined);

  function onUpdate() {
    history.push({
      pathname: "/update-event",
      data: event,
    });
  }

  return (
    <Card style={styles.card}>
      <Container style={styles.container}>
        <Row>
          <Col>
            <img style={styles.image} src={img} alt="" />
          </Col>
          <Col style={styles.title}>
            <h5>{title}</h5>
          </Col>
          <Col style={styles.title}>
            <h5>{dateString}</h5>
          </Col>
          <Col style={styles.title}>
            <h5>Participants: {participants}</h5>
          </Col>
          <Col style={styles.title}>
            <Button
              style={styles.button}
              onClick={onUpdate}
              variant="outline-primary"
            >
              Edit
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
