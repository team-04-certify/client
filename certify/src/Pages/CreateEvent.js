import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CreateEvent() {
  const dispatch = useDispatch();
  const history = useHistory();

  const errorMessage = useSelector((state) => state.event.errors);
  const [error, setError] = useState([]);
  const [input, setInput] = useState({
    title: "",
    date: "",
    type: "",
  });

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
    <Form style={styles.form}>
      <h4 style={styles.title}>Create event</h4>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control style={styles.input} type="title" />
      </Form.Group>

      <Form.Group style={styles.content} controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control style={styles.input} type="Date" />
      </Form.Group>

      <Form.Group style={styles.content} controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control style={styles.input} type="Description" />
      </Form.Group>
      <Button style={styles.button} variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}
