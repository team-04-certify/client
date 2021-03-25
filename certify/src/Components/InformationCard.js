import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../Store/Actions";
import { Alert } from "@material-ui/lab";

export default function InformationCard({ event }) {
  const [input, setInput] = useState(null);

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
  }, [event]);

  useEffect(() => {
    //
  }, [recipients]);

  const getFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setInput(file);
  };

  const [showAlert, setShowAlert] = useState(false);

  const uploadFile = async (e) => {
    try {
      e.preventDefault();
      if (input.length !== 0) {
        setShowAlert(true);
        const formdata = new FormData();
        formdata.append("file", input);
        await dispatch(
          allActions.event.uploadBanner({
            data: formdata,
            access_token: localStorage.access_token,
            eventId: event.id,
          })
        );
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      } else {
        showAlert(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex flex-column">
      {showAlert ? (
        <Alert
          variant="filled"
          style={{ paddingLeft: "45%", marginBottom: "15px" }}
          severity="success"
        >
          Success add banner
        </Alert>
      ) : (
        <p></p>
      )}
      <Card className="card row info-card">
        {!event.banner ? (
          <div className="upload-cont card">
            <form action="">
              <input
                type="file"
                onChange={(e) => getFile(e)}
                accept=".png,.jpg,.jpeg"
              />
              <button
                onClick={(e) => uploadFile(e)}
                className="btn btn-primary"
              >
                Upload banner
              </button>
            </form>
          </div>
        ) : (
          <div className="col-md banner-img">
            <img style={styles.image} src={event.banner} alt="" />
          </div>
        )}
        <div className="col-md card-desc">
          <thead>
            <tr className="card-col">
              <td>
                <p>Title</p>
              </td>
              <td>
                <p>Date</p>
              </td>
              <td>
                <p>Type</p>
              </td>
              <td>
                <p>Recipients</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="card-col">
              <td className="bolder">
                <p>{event.title}</p>
              </td>
              <td className="bolder">
                <p>{dateString}</p>
              </td>
              <td className="bolder">
                <p>{event.type}</p>
              </td>
              <td className="bolder">
                <p>{recipients.length}</p>
              </td>
            </tr>
          </tbody>
        </div>
      </Card>
    </div>
  );
}
