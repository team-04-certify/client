import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ModalDelete } from "../Components/";
import allActions from "../Store/Actions";

export default function EventCard({
  title,
  date,
  event,
  participants,
  banner,
}) {
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
        <img style={styles.image} src={banner} alt="event banner" />
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

        <ModalDelete onDelete={onDelete} />

        {/* <Button
          style={styles.button}
          onClick={onDelete}
          variant="outline-primary"
        >
          Delete
        </Button> */}
      </div>
    </Card>
  );
}
