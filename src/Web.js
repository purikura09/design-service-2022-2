import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./Style.css";

export default function Web() {
  return (
    <>
      <a
        href="https://sites.google.com/view/hr-littledesign/accueil"
        target="_blank"
      >
        <Button
          className="rounded-pill px-4 border border-white"
          variant="light"
        >
          Demo
        </Button>
      </a>
    </>
  );
}
