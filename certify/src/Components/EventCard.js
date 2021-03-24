import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import img from "../assets/sertifikat.png";
import allActions from "../Store/Actions";

export default function EventCard({ title, date, type, event, participants }) {
  const styles = {
    card: {
      marginBottom: 20,
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
  const recipients = useSelector((state) => state.recipient.recipients);

  let dateString = new Date(date).toLocaleDateString(undefined);

  function onInfo() {
    history.push(`/event-information/${event.id}`);
    dispatch(
      allActions.recipient.getAllRecipients({
        eventId: event.id,
        access_token: localStorage.access_token,
      })
    );
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
    <Card className="large-card" style={styles.card}>
      <div>
        <img
          style={styles.image}
          src="https://i.pinimg.com/originals/5f/d4/4f/5fd44f56f142b6448819e7c4e0b0ad8c.jpg"
          alt=""
        />
      </div>
      <div>
        <h5>{title}</h5>
      </div>
      <div>
        <h5>{dateString}</h5>
      </div>
      <div>
        <h5>Participants: {participants}</h5>
      </div>
      <div>
        <Button
          style={styles.button}
          onClick={onInfo}
          variant="outline-primary"
        >
          Details
        </Button>
        <Button
          style={styles.button}
          onClick={onUpdate}
          variant="outline-primary"
        >
          Edit
        </Button>
        <Button
          style={styles.button}
          onClick={onDelete}
          variant="outline-primary"
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
