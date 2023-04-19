import React, { Component } from "react";

/*my imports */
import "./footer.css";
import Logo from "../assets/Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid footer-layout">
          <div className="grid grid-spacing">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-sm-5 col-12">
                <ul>
                  <h5 className="footer-title mb-3">Nos prestations</h5>
                  <a href="/servicesItemOne">
                    <li>Nettoyage industrielle</li>
                  </a>
                  <a href="/servicesItemTow">
                    <li>Gestion des déchets</li>
                  </a>
                  <a href="/servicesItemThree">
                    <li>Curage et assainissement</li>
                  </a>
                  <a href="/servicesItemFoor">
                    <li>Services facilitaires</li>
                  </a>
                </ul>
              </div>
              <div className="col-xl-2 col-sm-7 col-12">
                <ul>
                  <h5 className="footer-title mb-3">Liens</h5>
                  <a href="/home">
                    <li className="footer-link-item">Acceuil</li>
                  </a>
                  <a href="/about">
                    <li className="footer-link-item">Qui sommes nous?</li>
                  </a>
                  <a href="/about">
                    <li className="footer-link-item">Nos valeurs</li>
                  </a>
                  <a href="/servicesItemOne">
                    <li className="footer-link-item">Nos prestations</li>
                  </a>
                  <a href="/contact">
                    <li className="footer-link-item">Contactez-nous</li>
                  </a>
                </ul>
              </div>
              <div className="col-xl-3 col-sm-5 col-12">
                <ul>
                  <h5 className="footer-title mb-3">Contact</h5>
                  <li className="footer-text-item">T: +212 6 60 24 72 17</li>
                  <li className="footer-text-item">F: +212 5 20 24 72 17</li>
                  <li>mesfar@altalys.ma</li>
                  <li>
                    Angle Bd.Abdelmoumen & Rue Soumaya Rés. Shehrazade 3 4ème
                    étage n°20 Palmiers - Casablanca
                  </li>
                </ul>
              </div>
              <div className="col-xl-4 col-sm-7 col-12">
                <img src={Logo} alt="footer logo" />
                <h5 className="footer-title">
                  Préstation de service sur mesure
                </h5>
                <p>
                  Notre expérience nous permet de pouvoir répondre <br /> au
                  mieux à vos attentes et vous donner
                  <br /> un conseil personnalisé adapté à chaque cas.
                  <br />
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} className="brand-icon" />
                  </a>
                  <a href="">
                    <FontAwesomeIcon icon={faLinkedin} className="brand-icon" />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="brand-icon"
                    />
                  </a>
                </p>
              </div>
            </div>
            <div className="row end-row justify-content-center align-items-center">
              Tous droits réservés. © Groupe ALTALYS
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
