import React, { Component } from "react";

/* my imports */
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoap,
  faTrash,
  faSeedling,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import serviceImg from "../../assets/services.png";
import Services from "./services.jsx";

export class ServicesItemFoor extends Component {
  render() {
    return (
      <div className="container-fluid services-bg p-0">
        <div>
          <img
            src={serviceImg}
            alt="service-img"
            className="services-img mb-5 img-fluid"
            width="1910px"
          />
        </div>

        <div className="container services-section-one">
          <h1 className="services-big-title mb-4">Services facilitaires</h1>
          <h2>
            <FontAwesomeIcon icon={faPlus} />
            Un service complémentaire de proximité
          </h2>

          <div className="d-flex flex-colomn justify-content-around">
            <ul>
              <h3 className="services-medium-title">Aides multi-services</h3>
              <li className="services-list-item">
                Gestion de l’accueil et du standard,
              </li>
              <li className="services-list-item">Gestion du stock,</li>
              <li className="services-list-item">
                Manutention et gardiennage.
              </li>
            </ul>
            <ul>
              <h3 className="services-medium-title">
                Facilités multi-techniques
              </h3>
              <li className="services-list-item">
                Petites interventions techniques ou de maintenance,
              </li>
              <li className="services-list-item">
                Remplacement des pièces d’usure,
              </li>
              <li className="services-list-item">Travaux divers.</li>
            </ul>
          </div>
        </div>
        <Services />
      </div>
    );
  }
}

export default ServicesItemFoor;
