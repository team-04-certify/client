import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import allAction from "../Store/Actions";

export default function CreateEvent() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    title: "",
    date: "",
    type: "",
  });

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleOnSubmit = async () => {
    let newEvent = await dispatch(
      allAction.event.addEvent({
        data: input,
        access_token: localStorage.access_token,
      })
    );

    history.push(`/event-information/${newEvent.data.event.id}`);
    setInput({
      title: "",
      date: "",
      type: "",
    });
  };

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
    button: {
      borderRadius: 0,
      color: "#ffff",
      backgroundColor: "#00509D",
      width: 100,
    },
  };

  return (
    <section className="create-event-cont">
      <div style={styles.form}>
        <h4 style={styles.title}>Create event</h4>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={onChangeInput}
            style={styles.input}
            type="title"
            value={input.title}
          />
        </Form.Group>

        <Form.Group style={styles.content} controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            onChange={onChangeInput}
            style={styles.input}
            type="Date"
            value={input.date}
          />
        </Form.Group>

        <Form.Group style={styles.content} controlId="type">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={onChangeInput}
            style={styles.input}
            type="Description"
            value={input.type}
          />
        </Form.Group>
        <Button
          onClick={handleOnSubmit}
          style={styles.button}
          variant="primary"
          type="submit"
          className="mt-3"
        >
          Create
        </Button>
      </div>
    </section>
  );
}
