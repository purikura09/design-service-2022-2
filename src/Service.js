import React from "react";
import Digital from "./Digital";
import Graphic from "./Graphic";

import digital from "./img/digital.png";
import graphic from "./img/graphic.png";
import site from "./img/site.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

export default function Service() {
  return (
    <div id="service">
      <div className="box h-100 d-inline-flex flex-row align-items-center ">
        <div className="p-3 mx-4 " id="box-1">
          <img src={digital} alt="Digital" />
          <div className="Details">
            <h2>
              Contenu <br /> Digital
            </h2>
            <p>Valoriser vos publications sur les réseaux sociaux. </p>
            <Digital />
          </div>
        </div>

        <div className=" p-3  mx-4 " id="box-2">
          <img src={graphic} alt="Graphic" />
          <div className="Details">
            <h2>
              Design
              <br /> Graphique
            </h2>
            <p>
              Création ou retouche de votre logo ou autres supports graphiques.
            </p>
            <Graphic />
          </div>
        </div>

        <div className="p-3 mx-4 " id="box-3">
          <img src={site} alt="web" />
          <div className="Details" alt="Web">
            <h2>
              Site <br /> Internet
            </h2>
            <p>
              <b>1 page</b> vitrine pour marquer votre présence dans le monde
              digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
