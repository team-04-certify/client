import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../Store/Actions";


export default function LandingPage() {
  const styles = {
    image: {
      height: "70%",
      justifyContent: "end",
      marginTop: 20,
    },
    button: {
      borderRadius: 0,
      backgroundColor: "#00509D",
      color: "#ffff",
      marginTop: 20,
      textDecoration: "none",
    },
    title: {
      fontWidth: "bold",
      marginTop: 130,
    },
  };

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(allActions.organizer.setPage(history.location.pathname));
  }, []);

  return (
    <Container className="landing-page">
      <Row>
        <Col style={styles.title} sm={6}>
          <h1>No more worry</h1>
          <h1>about your certificate</h1>
          <p>Create, Send & Validate your event certificate</p>
          <Button style={styles.button} variant="outline-primary">
            <Link style={styles.button} to="/login">
              Create certificate
            </Link>
          </Button>
        </Col>
        <Col sm={4}>
          <img style={styles.image} className="image" src="https://certifyfilebucket.s3-ap-southeast-1.amazonaws.com/landing-page.webp" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
