import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import img from "../assets/sertifikat.png";
import { useSelector, useDispatch } from "react-redux";

import allActions from "../Store/Actions";

export default function InformationCard({ event }) {
  const [input, setInput] = useState(null);
  console.log(event, '===event')

  const styles = {
    card: {
      margin: 50,
    },
    container: {
      padding: 40,
    },
    image: {
      width: 450,
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
  let dateString = new Date(event.date).toLocaleDateString("en-US");

  const dispatch = useDispatch();
  const recipients = useSelector((state) => state.recipient.recipients);

  useEffect(() => {
    dispatch(
      allActions.recipient.getAllRecipients({
        eventId: event.id,
        access_token: localStorage.access_token,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    //
  }, [recipients]);

  const getFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setInput(file);
  };

  const uploadFile = async (e) => {
    try {
      e.preventDefault();
      console.log(input);
      const formdata = new FormData();
      formdata.append("file", input);
      console.log(formdata, '===formdata')
      await dispatch(
        allActions.event.uploadBanner({
          data: formdata,
          access_token: localStorage.access_token,
          eventId: event.id
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="info-card">
      {
        !event.banner?
        <div className="upload-cont card">
          <form action="">
            <input
              type="file"
              onChange={(e) => getFile(e)}
              accept=".png,.jpg,.jpeg"
            />
            <button onClick={(e) => uploadFile(e)} className="btn btn-primary">
              Upload file
            </button>
          </form>
        </div>:
        <div className="banner-img">
          <img
            style={styles.image}
            src={event.banner}
            alt=""
          />
        </div>
      }
      <div className="card-desc">
        <div className="card-col">
          <h5>Title</h5>
          <h5>Date</h5>
          <h5>Type</h5>
          <h5>Recipients</h5>
        </div>
        <div className="card-col">
          <h5 className="bolder">{event.title}</h5>
          <h5 className="bolder">{dateString}</h5>
          <h5 className="bolder">{event.type}</h5>
          <h5 className="bolder">{recipients.length}</h5>
          {console.log({ recipients })}
        </div>
      </div>
    </Card>
  );
}
