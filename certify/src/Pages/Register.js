import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Register() {
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
    <div className="container d-flex justify-content-center">
      <Form style={styles.form}>
        <h4 style={styles.title}>Register</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control style={styles.input} type="email" />
        </Form.Group>

        <Form.Group style={styles.content} controlId="formBasicName">
          <Form.Label>Organizer Name</Form.Label>
          <Form.Control style={styles.input} type="organizerName" />
        </Form.Group>

        <Form.Group style={styles.content} controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control style={styles.input} type="password" />
        </Form.Group>
        <Button className="mt-4" style={styles.button} variant="primary" type="submit">Register</Button>
      </Form>
    </div>
  );
}
