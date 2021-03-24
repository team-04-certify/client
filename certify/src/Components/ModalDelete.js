import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function ModalDelete({ onDelete }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = () => {
    onDelete();
    setShow(false);
  };

  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="secondary"
        style={{
          borderRadius: 0,
          color: "#ffff",
          backgroundColor: "#00509D",
          width: 80,
        }}
        onClick={handleShow}
      >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
