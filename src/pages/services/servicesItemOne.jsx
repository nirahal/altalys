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

export class ServicesItemOne extends Component {
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
          <h1 className="services-big-title mb-4">Nettoyage Industrielle</h1>
          <h2 className="services-second-title ">
            <FontAwesomeIcon icon={faSoap} />
            Une prestation de nettoyage sur-mesure
          </h2>
          <p>
            ALTALYS assure la mise en propreté de nombreux sites dans des
            secteurs d’activités variées. Notre expérience technique dans le
            domaine de propreté nous permet de répondre aux besoins de nos
            clients.Les prestations, définies selon un cahier des charges
            personnalisé et selon une fréquence adaptée, sont fondées sur de
            l’expertise technique.
          </p>

          <ul>
            <h3 className="services-medium-title">
              Nettoyage industriel, votre carte de visite !
            </h3>
            <li className="services-list-item">
              Nettoyage et dépoussiérage des meubles de bureaux et des
              comptoirs,
            </li>
            <li className="services-list-item">
              Dératisation/désinfection, désinsectisation,
            </li>
            <li className="services-list-item">Entretien des espaces verts,</li>
            <li className="services-list-item">
              Nettoyage fin de chantier : remise en état des sols et des murs,
              revêtement de sols, nettoyage des surfaces,
            </li>
            <li className="services-list-item">
              Nettoyage des extérieurs : pavés et cours…
            </li>
          </ul>
        </div>
        <Services />
      </div>
    );
  }
}

export default ServicesItemOne;
