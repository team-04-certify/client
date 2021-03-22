import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useHistory, Link } from "react-router-dom";
import allActions from "../Store/Actions";

export default function UpdateEvent() {
  const styles = {
    form: {
      margin: 50,
      width: 400,
      backgroundColor: "#A9D0F5",
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 45,
      paddingBottom: 45,
    },
    title: {
      paddingBottom: 12,
    },
    input: {
      borderRadius: 0,
    },
    button1: {
      borderRadius: 0,
      color: "#ffff",
      backgroundColor: "#00509D",
      width: 100,
    },
    button2: {
      marginLeft: 5,
      borderRadius: 0,
      color: "#00509D",
      borderColor: "#A9D0F5",
      backgroundColor: "#A9D0F5",
      width: 100,
    },
  };
  function dateString(date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
      .map((el) => (el < 10 ? `0${el}` : `${el}`))
      .join("-");
  }

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  let generateDate = dateString(new Date(location.data.date));

  const [input, setInput] = useState({
    title: location.data.title,
    date: generateDate,
    type: location.data.type,
  });

  function cancelUpdate() {
    history.push("/events");
  }

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  function handleOnSubmit() {
    dispatch(
      allActions.event.updateEvent({
        data: input,
        access_token: localStorage.access_token,
        id: location.data.id,
      })
    );

    history.push("/events");
  }

  return (
    <div style={styles.form}>
      <h4 style={styles.title}>Edit event</h4>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          style={styles.input}
          type="title"
          value={input.title}
          onChange={onChangeInput}
        />
      </Form.Group>

      <Form.Group style={styles.content} controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control
          style={styles.input}
          type="Date"
          value={input.date}
          onChange={onChangeInput}
        />
      </Form.Group>

      <Form.Group style={styles.content} controlId="type">
        <Form.Label>Type</Form.Label>
        <Form.Control
          style={styles.input}
          type="Description"
          value={input.type}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Button
        style={styles.button1}
        onClick={handleOnSubmit}
        variant="primary"
        type="submit"
      >
        Save
      </Button>
      <Button
        style={styles.button2}
        onClick={cancelUpdate}
        variant="primary"
        type="submit"
      >
        Cancel
      </Button>
    </div>
  );
}
