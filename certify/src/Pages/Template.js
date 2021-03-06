import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import allAction from "../Store/Actions";

import { Form, Button } from "react-bootstrap";
import img1 from "../assets/template1.png";
import img2 from "../assets/template2.png";
import img3 from "../assets/template3.png";

import bracketIcon from "../assets//curly-bracket-icon.svg";
import designIcon from "../assets/design-icon.svg";
import fileIcon from "../assets/file-icon.svg";


export default function Template() {
  const [input, setInput] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const inputRef = useRef(null);
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
      inputRef.current.value = "";
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
    await dispatch(
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
  }

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
          style={{ paddingLeft: "45%", margin: 20 }}
          severity="success"
        >
          Success send certificate
        </Alert>
      ) : (
        <p></p>
      )}
      {showAlertUpload ? (
        <Alert
          variant="filled"
          style={{ paddingLeft: "45%", margin: 20 }}
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
              ref={inputRef}
            />
            <button onClick={(e) => uploadFile(e)} className="btn btn-primary">
              Upload file
            </button>
          </Form>
          <Button className="btn-large" onClick={generateAndSendCertificate}>
            Send
          </Button>
        </div>
        <div className="tips-cont">
          <h3 className="text-center mb-4">How to create your own template</h3>
          <div className="row">
            <div className="col">
              <div className="img">
                <img src={fileIcon} alt="file-icon.svg" />
              </div>
              <div className="title">
                <h5>.PPTX file</h5>
              </div>
              <div className="desc">
                <p>
                  Template file must be <b>.ppt</b> or <b>.pptx</b>. You can create this file with PowerPoint or Google Slide.
                </p>
                <p>Create Google Slide <a href="https://slide.new" target="_blank">here</a></p>
              </div>
            </div>
            <div className="col">
              <div className="img">
                <img src={bracketIcon} alt="curly-bracket-icon.svg" />
              </div>
              <div className="title">
                <h5>Use curly bracket as variable</h5>
              </div>
              <div className="desc">
                <p>
                  Create your certificate field (e.q. name or event title) with curly bracket.
                </p>
                <p>Download template <a href="https://drive.google.com/file/d/1NaQVIUu8vWvc2R8YyaIRHX7VimxKrZFh/view?usp=drivesdk" target="_blank">here</a></p>
              </div>
            </div>
            <div className="col">
              <div className="img">
                <img src={designIcon} alt="design-icon.svg" />
              </div>
              <div className="title">
                <h5>Your design does the rest</h5>
              </div>
              <div className="desc">
                <p>
                  Design your own template freely. We do not give you limitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
