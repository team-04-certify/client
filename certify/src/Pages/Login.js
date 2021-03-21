import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

import allAction from "../Store/Actions";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const access_token = useSelector((state) => state.organi);

  const styles = {
    form: {
      margin: 50,
      width: 400,
      backgroundColor: "#A9D0F5",
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 45,
      paddingBottom: 100,
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
    <Container className="justify-content-center">
      <Form style={styles.form}>
        <h4 style={styles.title}>Login</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control style={styles.input} type="email" />
        </Form.Group>

        <Form.Group style={styles.content} controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control style={styles.input} type="password" />
        </Form.Group>
        <Button style={styles.button} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
