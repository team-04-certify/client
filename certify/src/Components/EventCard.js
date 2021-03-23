import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import img from "../assets/sertifikat.png";
import allActions from "../Store/Actions";

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
      width: 80,
    },
    title: {
      paddingTop: 40,
      paddingLeft: 50,
    },
  };
  const history = useHistory();
  const dispatch = useDispatch();

  let dateString = new Date(date).toLocaleDateString(undefined);

  function onInfo() {
    history.push(`/event-information/${event.id}`);
  }

  function onUpdate() {
    history.push(`/update-event/${event.id}`);
  }

  function onDelete() {
    dispatch(
      allActions.event.deleteEvent({
        id: event.id,
        access_token: localStorage.access_token,
      })
    );
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
            <h5>Participants: 100</h5>
          </Col>
          <Col style={styles.title}>
            <Button
              style={styles.button}
              onClick={onInfo}
              variant="outline-primary"
            >
              Info
            </Button>
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
          <Col style={styles.title}>
            <Button
              style={styles.button}
              onClick={onDelete}
              variant="outline-primary"
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
