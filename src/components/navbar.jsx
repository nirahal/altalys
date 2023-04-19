import React, { Component } from "react";

/*my imports*/
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

let item = {
  acceuil: "active",
  about: "",
  services: "",
  contact: "",
};

export class Navbar extends Component {
  activeLink = () => {
    switch (window.location.pathname) {
      case "/acceuil":
        item = {
          acceuil: "active",
          about: "",
          services: "",
          contact: "",
        };
        break;
      case "/about":
        item = {
          acceuil: "",
          about: "active",
          services: "",
          contact: "",
        };

        break;
      case "/servicesItemOne":
        item = {
          acceuil: "",
          about: "",
          services: "active",
          contact: "",
        };
        break;
      case "/servicesItemTwo":
        item = {
          acceuil: "",
          about: "",
          services: "active",
          contact: "",
        };
        break;
      case "/servicesItemThree":
        item = {
          acceuil: "",
          about: "",
          services: "active",
          contact: "",
        };
        break;
      case "/servicesItemFoor":
        item = {
          acceuil: "",
          about: "",
          services: "active",
          contact: "",
        };
        break;
      case "/contact":
        item = {
          acceuil: "",
          about: "",
          services: "",
          contact: "active",
        };
        break;
      case "/devis":
        item = {
          acceuil: "",
          about: "",
          services: "",
          contact: "",
        };
        break;
    }
  };
  render() {
    this.activeLink();
    return (
      <div className="sticky-top d-flex justify-content-center bg-color mt-4">
        <nav className="navbar navbar-expand-lg py-2">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={"nav-link item-color " + item.acceuil}
                    aria-current="page"
                    href="/"
                  >
                    Acceuil
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={"nav-link  item-color " + item.about}
                    aria-current="page"
                    href="/about"
                  >
                    A propos
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className={
                      "nav-link dropdown-toggle item-color " + item.services
                    }
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Nos prestations
                  </a>
                  <ul className="dropdown-menu dropdown-bg">
                    <li>
                      <a className="dropdown-item" href="/servicesItemOne">
                        Nettoyage industrielle
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/servicesItemTwo">
                        Gestion des déchets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/servicesItemThree">
                        Curage et assainissement
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/servicesItemFoor">
                        Services facilitaires
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className={"nav-link item-color " + item.contact}
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
                <a
                  className="btn btn-secondary nav-btn item-color"
                  href="/devis"
                >
                  Demander un devis
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
