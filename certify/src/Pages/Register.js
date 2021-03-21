import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import allAction from "../Store/Actions";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const errorMsg = useSelector((state) => state.organizer.error);
  // const loading = useSelector()
  console.log({ atas: errorMsg });
  const [error, setError] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
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

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleOnSubmit = () => {
    console.log(input);
    dispatch(allAction.organizer.getRegister(input));
    console.log({ errorMsg });
    if (errorMsg) {
      setError(errorMsg);
    } else {
      history.push("/login");
    }
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div style={styles.form}>
      {console.log(error)}
      <h4 style={styles.title}>Register</h4>
      {error && error.map((err) => <p style={{ color: "red" }}>{err}</p>)}
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={onChangeInput}
          style={styles.input}
          type="email"
        />
      </Form.Group>

      <Form.Group style={styles.content} controlId="name">
        <Form.Label>Organizer Name</Form.Label>
        <Form.Control
          onChange={onChangeInput}
          style={styles.input}
          type="text"
        />
      </Form.Group>

      <Form.Group style={styles.content} controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={onChangeInput}
          style={styles.input}
          type="password"
        />
      </Form.Group>
      <Button
        onClick={handleOnSubmit}
        style={styles.button}
        variant="primary"
        type="submit"
      >
        Register
      </Button>
    </div>
  );
}
