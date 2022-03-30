import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import insta from "./img/insta.png";
import linkedin from "./img/linkedin.png";
import "./Style.css";

export default function Home() {
  return (
    <div id="home">
      <Container>
        <Row className="Box justify-content-md-center">
          <Col className="Card">
            <div className="Picture"></div>
            <br />
            <h2>Rebecca</h2>
            <p>
              UI / UX et Digital Designer <br /> basée en Suisse
            </p>
            <p>FR | ENG</p>
            <img className="mx-3" src={insta} alt="instragram" />
            <img className="mx-3" src={linkedin} alt="linkedin" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
