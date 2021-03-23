import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import img from "../assets/sertifikat.png";
import { useSelector, useDispatch } from "react-redux";

import allActions from "../Store/Actions";

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

  const dispatch = useDispatch();
  const recipients = useSelector((state) => state.recipient.recipients);

  useEffect(() => {
    dispatch(
      allActions.recipient.getAllRecipients({
        eventId: event.id,
        access_token: localStorage.access_token,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    //
  }, [recipients]);

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
            <h5>{recipients.length}</h5>
            {console.log({ recipients })}
          </Col>
          <Col>
            <img
              style={styles.image}
              src="https://i.pinimg.com/originals/5f/d4/4f/5fd44f56f142b6448819e7c4e0b0ad8c.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
