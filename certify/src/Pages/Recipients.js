import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Papa from "papaparse";
import { Alert } from "@material-ui/lab";

import allAction from "../Store/Actions";

import { Form, Spinner } from "react-bootstrap";
import RecipientRow from "../Components/RecipientRow";
import allActions from "../Store/Actions";

export default function Recipients() {
  const [showAdd, setShowAdd] = useState(false);
  const [input, setInput] = useState(null);
  const [string, setString] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [name, setName] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [certificateNumber, setCertificateNumber] = useState(null);

  const { eventId } = useParams();
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const recipients = useSelector((state) => state.recipient.recipients);
  const loading = useSelector((state) => state.recipient.loading);

  useEffect(() => {
    dispatch(
      allAction.recipient.getAllRecipients({
        access_token: localStorage.access_token,
        eventId,
      })
    );
    dispatch(
      allActions.event.getEvent({
        access_token: localStorage.access_token,
        eventId,
      })
    );
  }, []);

  const clickShowAdd = (e) => {
    e.preventDefault();
    setShowAdd(true);
  };

  const clickCloseAdd = (e) => {
    e.preventDefault();
    setShowAdd(false);
  };

  const getFile = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      complete: function (results, _) {
        setInput(results.data);
        setString(e.target.files[0].name);
      },
    });
  };

  const uploadFile = async (e) => {
    try {
      e.preventDefault();
      await dispatch(
        allAction.recipient.addRecipients({
          data: input,
          access_token: localStorage.access_token,
          eventId,
        })
      );
      setInput(null);
      inputRef.current.value = "";
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const addRecipient = async (e) => {
    try {
      e.preventDefault();
      const input = [
        {
          name,
          role,
          email,
          certificateNumber,
        },
      ];
      await dispatch(
        allAction.recipient.addRecipients({
          data: input,
          access_token: localStorage.access_token,
          eventId,
        })
      );

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      setShowAdd(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getUpdate = () => {
    dispatch(
      allAction.recipient.getAllRecipients({
        access_token: localStorage.access_token,
        eventId,
      })
    );
    dispatch(
      allActions.event.getEvent({
        access_token: localStorage.access_token,
        eventId,
      })
    );
  };

  return (
    <div style={{ position: "relative" }} className="recipient">
      {loading && (
        <Spinner
          style={{ position: "absolute", top: "50%", left: "50%" }}
          animation="border"
        />
      )}
      <div className="container">
        <div className="upload-cont card">
          <Form action="">
            <input
              type="file"
              onChange={(e) => getFile(e)}
              accept=".csv"
              ref={inputRef}
            />
            <button onClick={(e) => uploadFile(e)} className="btn btn-primary">
              Upload file
            </button>
          </Form>
        </div>

        <div className="recipient-tab d-flex justify-content-center flex-column">
          <div className="btn-cont d-flex flex-row justify-content-between">
            {!showAdd ? (
              <button
                onClick={(e) => clickShowAdd(e)}
                className="btn btn-primary"
              >
                <i className="bi bi-plus-circle-fill mr-2"></i>
                Add recipient
              </button>
            ) : null}
            <button onClick={getUpdate} className="btn btn-secondary">
              <i class="bi bi-arrow-repeat"></i>
            </button>
          </div>
          {showAlert && (
            <Alert style={{ marginTop: 5 }} variant="filled" severity="success">
              Success added recipients
            </Alert>
          )}
          <table className="table mt-3">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
                <th scope="col">No. Certificate</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {showAdd ? (
                <tr>
                  <td>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Name"
                    />
                  </td>
                  <td>
                    <input
                      onChange={(e) => setRole(e.target.value)}
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Role"
                    />
                  </td>
                  <td>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="mail@mail.com"
                    />
                  </td>
                  <td>
                    <input
                      onChange={(e) => setCertificateNumber(e.target.value)}
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Cert. no."
                    />
                  </td>
                  <td></td>
                  <td>
                    <div className="action-btn">
                      <a onClick={(e) => addRecipient(e)}>
                        <i
                          style={{ color: "#1265D7" }}
                          className="bi bi-check-circle-fill"
                        ></i>
                      </a>
                      <a onClick={(e) => clickCloseAdd(e)}>
                        <i
                          style={{ color: "red" }}
                          className="bi bi-x-circle-fill"
                        ></i>
                      </a>
                    </div>
                  </td>
                </tr>
              ) : null}
              {recipients.map((recipient) => {
                return (
                  <RecipientRow
                    eventId={eventId}
                    recipient={recipient}
                    key={recipient.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
