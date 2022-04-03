import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import insta from "./img/insta.svg";
import linkedin from "./img/linkedin.svg";
import mail from "./img/mail.svg";
import "./Style.css";

export default function Home() {
  return (
    <div id="home">
      <Container>
        <Row className="Box justify-content-md-center">
          <Col className="Card">
            <div className="Picture"></div>
            <br />
            <h1>Rebecca</h1>
            <h2>UI & Digital designer</h2>
            <p>
              basée en Suisse pour du
              <br /> <b>"Design minimaliste"</b>
            </p>
            <a href="https://www.instagram.com/rebi0906/" target="_blank">
              <img className="mx-3" src={insta} height={40} alt="instragram" />
            </a>
            <a href="https://www.linkedin.com/in/haberli-reb" target="_blank">
              <img className="mx-3" src={linkedin} height={40} alt="linkedin" />
            </a>
            <a href="mailto:rbk@ik.me" target="_blank">
              <img className="mx-3" src={mail} height={40} alt="linkedin" />
            </a>
            <br /> <br />
            <p>FR | ENG</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
