import React from "react";
import { Form, Button } from "react-bootstrap";

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

  return (
    <Form style={styles.form}>
      <h4 style={styles.title}>Edit event</h4>
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
      <Button style={styles.button1} variant="primary" type="submit">
        Save
      </Button>
      <Button style={styles.button2} variant="primary" type="submit">
        Cancel
      </Button>
    </Form>
  );
}
