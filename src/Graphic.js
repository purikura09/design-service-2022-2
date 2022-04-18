import React from "react";

import cardRecto from "./img/cards_1.png";
import cardVerso from "./img/cards_2.png";

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
        <img width={150} src={cardRecto} alt="Cards_1" />
        <img width={150} src={cardVerso} alt="Cards_2" />
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
