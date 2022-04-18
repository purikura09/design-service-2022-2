import React from "react";

import kdo from "./img/kdo.gif";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import "./Style.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      className="Digital"
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="Digital"></Modal.Header>
      <Modal.Body className="text-center">
        <img width={250} src={kdo} alt="Kdo" />
      </Modal.Body>
      <Modal.Footer className="Digital align-items-center">
        <Button
          className="align-items-center"
          onClick={props.onHide}
          variant="light"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Digital() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        className="rounded-pill px-4 border border-white"
        variant="light"
        onClick={() => setModalShow(true)}
      >
        Demo
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
