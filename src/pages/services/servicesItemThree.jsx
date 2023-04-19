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

export class ServicesItemThree extends Component {
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
          <h1 className="services-big-title mb-4">Curage et assainissement</h1>
          <h2>
            <FontAwesomeIcon icon={faSeedling} />
            Un engagement réel pour l’environnement
          </h2>
          <p>
            Outre ses activités de gestion des déchets, ALTALYS est également en
            mesure de démanteler des structures polluées ou encore de nettoyer,
            pomper et curer des cuves et fosses avec élimination des résidus
            ainsi que des réseaux d’assainissement, conformément à la
            réglementation en vigueur.
          </p>

          <ul>
            <h3 className="services-medium-title">
              Assainissement et hydrocurage, votre carte de visite !
            </h3>
            <li className="services-list-item">
              Nettoyage des réseaux d’assainissement individuel ou collectif,
            </li>
            <li className="services-list-item">
              Pompage des fosses septiques,
            </li>
            <li className="services-list-item">Pompage des bacs à graisse,</li>
            <li className="services-list-item">
              pompage des stations de pompe de relevage,
            </li>
            <li className="services-list-item">
              Débouchage, curage et détartrage des canalisations,
            </li>
            <li className="services-list-item">
              Inspection par camera des canalisations.
            </li>
          </ul>
        </div>
        <Services />
      </div>
    );
  }
}

export default ServicesItemThree;
