import React, { Component } from "react";

/*my imports*/
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoap,
  faTrash,
  faSeedling,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export class Services extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mt-4 pb-5">
          <h2 className="bold services-ban-title">Tous nos services</h2>
          <div className="d-flex flex-direction-row justify-content-around">
            <div className="d-flex flex-column">
              <a href="/servicesItemOne">
                <h4 className="services-one-icon">
                  <FontAwesomeIcon icon={faSoap} />
                </h4>
                <h5 className="services-icon-text">Nettoyage industriel</h5>
              </a>
            </div>

            <div className="d-flex flex-column">
              <a href="/servicesItemTwo">
                <h4 className="services-two-icon">
                  <FontAwesomeIcon icon={faTrash} />
                </h4>
                <h5 className="services-icon-text">Gestion des déchets</h5>
              </a>
            </div>
            <div className="d-flex flex-column">
              <a href="/servicesItemThree">
                <h4 className="services-three-icon">
                  <FontAwesomeIcon icon={faSeedling} />
                </h4>
                <h5 className="services-icon-text">Curage et assainissement</h5>
              </a>
            </div>
            <div className="d-flex flex-column">
              <a href="/servicesItemFoor">
                <h4 className="services-foor-icon">
                  <FontAwesomeIcon icon={faPlus} />
                </h4>
                <h5 className="services-icon-text">Services facilitaires</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
