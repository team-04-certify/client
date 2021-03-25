import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import allActions from "../Store/Actions";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLogin = useSelector((state) => state.organizer.isLogin);
  const [error, setError] = useState([]);
  const errorMsg = useSelector((state) => state.organizer.errors);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setError(errorMsg);
    setTimeout(() => setError([]), 3000);
  }, [errorMsg]);

  useEffect(() => {
    dispatch(allActions.organizer.setPage(history.location.pathname));

    if (isLogin || localStorage.getItem("access_token")) {
      dispatch(allActions.organizer.setLogin(false));
      history.push("/events");
    }
  }, [isLogin]);

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleOnSubmit = () => {
    dispatch(allActions.organizer.getLogin(input));
    setInput({
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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ padding: "60px" }}
    >
      <div style={styles.form}>
        <h4 style={styles.title}>Login</h4>
        <p style={{ color: "red" }}>{error.message}</p>
        {/* {error &&
          error.map((el, i) => {
            return (
              <p style={{ color: "red" }} key={i}>
                {el.message}
              </p>
            );
          })} */}
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            style={styles.input}
            type="email"
            value={input.email}
          />
        </Form.Group>

        <Form.Group style={styles.content} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleOnChange}
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
          Login
        </Button>
      </div>
    </div>
  );
}
