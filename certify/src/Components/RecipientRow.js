import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import allAction from "../Store/Actions";
import { Modal, Button } from "react-bootstrap";

export default function RecipientRow(props) {
  const [showEdit, setShowEdit] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [certificateNumber, setCertificateNumber] = useState("");

  useEffect(() => {
    setName(props.recipient.name);
    setRole(props.recipient.role);
    setEmail(props.recipient.email);
    setCertificateNumber(props.recipient.certificateNumber);
  }, []);

  const dispatch = useDispatch();

  const clickShowEdit = (e) => {
    e.preventDefault();
    setShowEdit(true);
  };

  const clickCloseEdit = (e) => {
    e.preventDefault();
    setShowEdit(false);
  };

  const deleteBtn = async (e) => {
    try {
      e.preventDefault();
      await dispatch(
        allAction.recipient.deleteRecipients({
          recipientId: props.recipient.id,
          access_token: localStorage.access_token,
          eventId: props.eventId,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editRecipient = async (e) => {
    try {
      e.preventDefault();
      const input = {
        name,
        role,
        email,
        certificateNumber,
      };
      await dispatch(
        allAction.recipient.editRecipients({
          data: input,
          access_token: localStorage.access_token,
          recipientId: props.recipient.id,
          eventId: props.eventId,
        })
      );
      setShowEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <tr>
      {showEdit ? (
        <>
          <td>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control form-control-sm"
              placeholder="Name"
            />
          </td>
          <td>
            <input
              onChange={(e) => setRole(e.target.value)}
              value={role}
              type="text"
              className="form-control form-control-sm"
              placeholder="Role"
            />
          </td>
          <td>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control form-control-sm"
              placeholder="mail@mail.com"
            />
          </td>
          <td>
            <input
              onChange={(e) => setCertificateNumber(e.target.value)}
              value={certificateNumber}
              type="text"
              className="form-control form-control-sm"
              placeholder="Cert. no."
            />
          </td>
          <td>Not yet sent</td>
          <td>
            <div className="action-btn">
              <a onClick={(e) => editRecipient(e)}>
                <i
                  style={{ color: "#1265D7" }}
                  className="bi bi-check-circle-fill"
                ></i>
              </a>
              <a onClick={(e) => clickCloseEdit(e)}>
                <i style={{ color: "red" }} className="bi bi-x-circle-fill"></i>
              </a>
            </div>
          </td>
        </>
      ) : (
        <>
          <td>{props.recipient.name}</td>
          <td>{props.recipient.role}</td>
          <td>{props.recipient.email}</td>
          <td>{props.recipient.certificateNumber}</td>
          <td>{props.recipient.status}</td>
          <td>
            <div className="action-btn">
              <a onClick={(e) => clickShowEdit(e)}>
                <i
                  style={{ color: "#1265D7" }}
                  className="bi bi-pencil-square"
                ></i>
              </a>
              <a>
                <i
                  style={{ color: "red" }}
                  className="bi bi-trash"
                  onClick={handleShow}
                ></i>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete confirmation</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure want to delete this?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="danger" onClick={(e) => deleteBtn(e)}>
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>
              </a>
            </div>
          </td>
        </>
      )}
    </tr>
  );
}
