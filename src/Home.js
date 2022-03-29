import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Style.css";

export default function Home() {
  return (
    <div id="home">
      <Container>
        <Row className="Box justify-content-md-center">
          <Col className="Card">
            <div className="Picture"></div>
            <h1>Rebecca</h1>
            <h2>Web Designer basée en Suisse</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
