import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import img from "../assets/validated.png";

export default function ValidateCard({ recipient }) {
  const styles = {
    card: {
      margin: 50,
    },
    container: {
      padding: 40,
    },
    button: {
      borderRadius: 0,
      color: "#ffff",
      backgroundColor: "#00509D",
      width: 70,
    },
    title: {
      paddingTop: 70,
      paddingLeft: 30,
    },
  };

  if (recipient.Event) {
    return (
      <Card className="card row info-card">
          <div className="col-md banner-img">
            {
              recipient.Event.banner?
              <img
                style={styles.image}
                src={recipient.Event.banner}
                alt={recipient.Event.title}
              />:
              null
            }
          </div>
        <div className="col-md card-desc">
          <div className="card-col">
            <p>Name</p>
            <p>Event Name</p>
            <p>Certificate Number</p>
            <p>Organizer</p>
          </div>
          <div className="card-col">
            <p className="bolder">{recipient.name}</p>
            <p className="bolder">{recipient.Event.title}</p>
            <p className="bolder">{recipient.certificateNumber}</p>
            <p className="bolder">{recipient.Event.Organizer.name}</p>
          </div>
        </div>
      </Card>
    );
  } else {
    return <p>Loading...</p>;
  }
}
