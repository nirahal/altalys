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

export class ServicesItemTwo extends Component {
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
          <h1 className="services-big-title mb-4">Gestion des déchets</h1>
          <h2>
            <FontAwesomeIcon icon={faTrash} />
            Une gestion optimisée des déchets
          </h2>

          <p>
            ALTALYS occupe une position idéale pour apporter des solutions pour
            les industriels et les collectivités dans la gestion des
            problématiques de déchets et leur traitement. Elle réalise des
            audits avant toute opération de gestion de déchets.
          </p>

          <ul>
            <h3 className="services-medium-title">
              Gestion des déchets industriels, votre carte de visite !
            </h3>
            <li className="services-list-item">Collecte des déchets,</li>
            <li className="services-list-item">
              Evacuation et transport des déchets industriels,
            </li>
            <li className="services-list-item">Gestion des bacs,</li>
            <li className="services-list-item">
              Suivi de parc et maintenance des bacs roulants.
            </li>
          </ul>
        </div>
        <Services />
      </div>
    );
  }
}

export default ServicesItemTwo;
