import React from "react";
import digital from "./img/digital.png";
import graphic from "./img/graphic.png";
import site from "./img/site.png";

import "bootstrap/dist/css/bootstrap.min.css";

import "./Style.css";

export default function Service() {
  return (
    <div id="service">
      <div
        className="box h-100 d-inline-flex flex-row align-items-center "
        id="grid"
      >
        <div className="p-3 mx-4 " id="box-1">
          <img src={graphic} alt="Graphic" />
          <div className="Details">
            <h2>
              Graphique
              <br /> Design
            </h2>
            <p>
              Création ou retouche de vos supports graphiquea (logo, carte de
              visite etc...)
            </p>
          </div>
        </div>

        <div className=" p-3  mx-4 " id="box-2">
          <img src={digital} alt="Digital" />
          <div className="Details">
            <h2>
              Content <br /> Digital
            </h2>
            <p>
              Création de contenu digitaux (bannières, réseaux sociaux etc...)
            </p>
          </div>
        </div>

        <div className="p-3 mx-4 " id="box-3">
          <img src={site} alt="web" />
          <div className="Details" alt="Web">
            <h2>
              Site <br /> Internet
            </h2>
            <p>
              Un site standard développer avec une plateforme simple à reprendre
              par la suite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
