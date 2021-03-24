import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import allAction from "../Store/Actions";

import { Form, Button, Container, input } from "react-bootstrap";
import RecipientRow from "../Components/RecipientRow";
import img1 from "../assets/template1.png";
import img2 from "../assets/template2.png";
import img3 from "../assets/template3.png";
import { Spinner } from "react-bootstrap";

export default function Template() {
  const [input, setInput] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const loading = useSelector((state) => state.recipient.loading);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertUpload, setShowAlertUpload] = useState(false);
  const [templateNumber, setTemplateNumber] = useState(1);

  const getFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setInput(file);
  };

  const uploadFile = async (e) => {
    try {
      e.preventDefault();
      console.log(input);
      setShowAlertUpload(true);
      const formData = new FormData();
      formData.append("file", input);
      await dispatch(
        allAction.event.uploadTemplate({
          data: formData,
          access_token: localStorage.access_token,
          eventId,
        })
      );

      setTimeout(() => {
        setShowAlertUpload(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  function changeTemplate(number) {
    setTemplateNumber(number);
  }

  async function generateAndSendCertificate() {
    let temp = await dispatch(
      allAction.recipient.sendCertificate({
        eventId,
        access_token: localStorage.access_token,
        templateNumber,
      })
    );

    setShowAlert(true);

    setTimeout(() => {
      history.push(`/${eventId}/recipients`);
    }, 3000);

    // if (loading) {
    //   console.log(loading, "1");
    //   setSpinnerLoading(`<Spinner
    //   style={{ position: "absolute", top: "50%", left: "50%" }}
    //   animation="border"
    //   />`);
    // } else {
    //   console.log(loading, "2");
    //   history.push(`/${eventId}/recipients`);
    // }
  }

  // useEffect(() => {
  //   if (loading) {
  //     setSpinnerLoading(true);
  //   }
  // }, [loading]);

  const styles = {
    image: {
      width: 250,
      height: 180,
      cursor: "pointer",
      margin: "10px",
    },
    selectedImage: {
      width: 250,
      height: 180,
      cursor: "pointer",
      margin: "10px",
      border: "solid blue 3px",
    },
  };

  return (
    <>
      {showAlert ? (
        <Alert
          variant="filled"
          style={{ paddingLeft: "45%" }}
          severity="success"
        >
          Success send template
        </Alert>
      ) : (
        <p></p>
      )}
      {showAlertUpload ? (
        <Alert
          variant="filled"
          style={{ paddingLeft: "45%" }}
          severity="success"
        >
          Success add template
        </Alert>
      ) : (
        <p></p>
      )}

      <section className="template" style={{ position: "relative" }}>
        <div className="template-cont d-flex justify-content-center align-items-center card">
          <h3>Choose template</h3>
          <div className="template-div">
            <img
              style={templateNumber === 1 ? styles.selectedImage : styles.image}
              src={img1}
              alt=""
              onClick={() => changeTemplate(1)}
            />

            <img
              style={templateNumber === 2 ? styles.selectedImage : styles.image}
              onClick={() => changeTemplate(2)}
              src={img2}
              alt=""
            />
            <img
              style={templateNumber === 3 ? styles.selectedImage : styles.image}
              src={img3}
              alt=""
              onClick={() => changeTemplate(3)}
            />
          </div>
          <h5>or upload your template</h5>
          <Form className="mt-5">
            <input
              type="file"
              onChange={(e) => getFile(e)}
              accept=".ppt,.pptx"
            />
            <button onClick={(e) => uploadFile(e)} className="btn btn-primary">
              Upload file
            </button>
          </Form>
          <Button className="btn-large" onClick={generateAndSendCertificate}>
            Send
          </Button>
        </div>
      </section>
    </>
  );
}
