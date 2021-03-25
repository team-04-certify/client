import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import allAction from "../Store/Actions";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const successRegister = useSelector(
    (state) => state.organizer.successRegister
  );
  const errorMsg = useSelector((state) => state.organizer.errors);
  const [error, setError] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setError(errorMsg);
    setTimeout(() => setError([]), 3000);
  }, [errorMsg]);

  useEffect(() => {
    if (successRegister && history.location.pathname === "/register") {
      dispatch(allAction.organizer.setRegister(false));
      history.push("/login");
    }
  }, [successRegister]);

  const onChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleOnSubmit = () => {
    dispatch(allAction.organizer.register(input));

    setInput({
      name: "",
      email: "",
      password: "",
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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ padding: "60px" }}
    >
      <div style={styles.form}>
        <h4 style={styles.title}>Register</h4>
        {error &&
          error.map((el, i) => {
            return (
              <p style={{ color: "red" }} key={i}>
                {el.message}
              </p>
            );
          })}
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onChangeInput}
            style={styles.input}
            type="email"
            value={input.email}
          />
        </Form.Group>

        <Form.Group style={styles.content} controlId="name">
          <Form.Label>Organizer Name</Form.Label>
          <Form.Control
            onChange={onChangeInput}
            style={styles.input}
            type="text"
            value={input.name}
          />
        </Form.Group>

        <Form.Group style={styles.content} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={onChangeInput}
            style={styles.input}
            type="password"
            value={input.password}
          />
        </Form.Group>
        <Button
          onClick={handleOnSubmit}
          style={styles.button}
          className="mt-3"
          variant="primary"
          type="submit"
        >
          Register
        </Button>
      </div>
    </div>
  );
}
