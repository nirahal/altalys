import React, { Component } from "react";

/*my imports*/
import "./home.css";
import "../variables.css";
import Cara1 from "../assets/cara4.jpg";
import Cara2 from "../assets/cara2.jpg";
import Cara3 from "../assets/cara3.jpg";
import Cara4 from "../assets/cara1.jpg";
import Cara5 from "../assets/cara5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faTrash,
  faRecycle,
  faDumpster,
} from "@fortawesome/free-solid-svg-icons";

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid home-layout pb-5">
        <div
          id="carouselRide"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Cara1}
                className="d-block img-fluid home-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Cara2}
                className="d-block img-fluid home-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Cara3}
                className="d-block img-fluid home-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Cara4}
                className="d-block img-fluid home-img"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Cara5}
                className="d-block img-fluid home-img"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className=" container mt-5">
          <h2 className="home-title">
            Un partenaire unique pour une prestation globale
          </h2>
          <p className="home-paragraph-text">
            ALTALYS est une entreprise spécialisée dans le domaine du nettoyage
            industriel, de la gestion des déchets et des services associés
            (multiservices et multi techniques). Nous proposons une multitude de
            services aux entreprises du secteur privé et public.
          </p>
          <h2 className="home-title">Une vision partagée</h2>
          <p className="home-paragraph-text">
            Notre savoir-faire, dans le cadre d’une organisation bien définie,
            permet de satisfaire une large clientèle avec qui nous partageons la
            même vision du métier.
          </p>
          <h2 className="home-title">
            Une relation de partenariat et de proximité
          </h2>
          <p className="home-paragraph-text">
            Les convictions de nos équipes favorisent un service de qualité afin
            d’établir aujourd’hui et demain une relation de partenariat et de
            proximité durable avec nos clients.
          </p>
        </div>
        <div className="home-bar "></div>
        <div className="p-5 grid ">
          <div className="row pres-section">
            <div className="col-md-4 col-12">
              <h2 className="icon">
                <FontAwesomeIcon icon={faTrash} />
              </h2>
              <h3 className="home-second-title">Gestion des déchets</h3>
              <p className="pres-text">
                Nettoyage des bureaux L’entretien et le nettoyage des bureaux
                est une partie très importante de notre entreprise.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <h2 className="icon">
                <FontAwesomeIcon icon={faRecycle} />
              </h2>
              <h3 className="home-second-title">Nettoyage industrielle</h3>
              <p className="pres-text">
                Nettoyage des bureaux L’entretien et le nettoyage des bureaux
                est une partie très importante de notre entreprise.
              </p>
            </div>
            <div className="col-md-4 col-12">
              <h2 className="icon">
                <FontAwesomeIcon icon={faDumpster} />
              </h2>
              <h3 className="home-second-title">Aménagement du terrain</h3>
              <p className="pres-text">
                Nettoyage des bureaux L’entretien et le nettoyage des bureaux
                est une partie très importante de notre entreprise.
              </p>
            </div>
            <div className="d-flex justify-content-center my-5">
              <button className="btn btn-lg btn-outline-success home-btn">
                Découvrez l'ensemble de nos services
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
