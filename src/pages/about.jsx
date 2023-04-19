import React, { Component } from "react";

/*my import*/
import "./about.css";
import presImg from "../assets/presentation.jpg";
import valueImg from "../assets/values.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faCheck } from "@fortawesome/free-solid-svg-icons";

export class About extends Component {
  render() {
    return (
      <div className="about-layout py-5">
        <h1 className="about-title mt-3 mb-4">Qui sommes-nous?</h1>
        <div className="container">
          <div className="grid"></div>
          <div className="row presentation-section">
            <div className="col-xl-6 col-12">
              <h2 className="presentation-title">Présentation</h2>

              <h4 className="presentation-quote">
                <FontAwesomeIcon icon={faQuoteLeft} />
                La satisfaction de nos clients est l’ADN de notre existence.
              </h4>
              <p className="presentation-text">
                <span className="bold">ALTALYS</span> est une entreprise, à
                taille humaine et de proximité, qui offre aux entreprises issues
                des secteurs tertiaire, commercial ou industriel un vaste panel
                de prestations ; du nettoyage industriel à la gestion des
                déchets.
                <br /> Parallèlement à nos services de nettoyage, nous proposons
                aux entreprises des prestations complémentaires : services
                facilitaires (multi-services et multi-techniques).
                <br /> L’expérience acquise au fil du temps permet d’assurer à
                nos clients l’efficacité de nos interventions et la réactivité
                de nos équipes.
                <br /> La mission d’ALTALYS est de soutenir ses clients dans
                l’optimisation de leur performance environnementale, en leur
                proposant les conseils de professionnels de terrain et les
                prestations de qualité.
              </p>
            </div>
            <div className="col-xl-6 col-12 hide">
              <img
                className="presentation-img"
                src={presImg}
                alt="image"
                width="600px"
              />
            </div>
          </div>
          <div className="row value-section">
            <div className="col-xl-6 col-12 hide">
              <img
                className="value-img"
                src={valueImg}
                alt="value-image"
                width="600px"
              />
            </div>
            <div className="col-xl-6 col-12 value-right">
              <h2 className="value-title">Nos valeurs</h2>
              <h4 className="value-quote">
                <FontAwesomeIcon icon={faQuoteLeft} />
                Une culture d’entreprise axée sur des valeurs fortes.
              </h4>
              <ul className="value-text">
                <li className="bold">
                  <FontAwesomeIcon icon={faCheck} />
                  Adaptabilité :
                </li>
                <p>
                  Nous faisons preuve d’ouverture face aux changements dans nos
                  façons de faire et celle des clients en bâtissant une réponse
                  sur mesure adaptée aux spécificités de chaque situation
                  donnée.
                </p>
                <li className="bold">
                  <FontAwesomeIcon icon={faCheck} />
                  Respect
                </li>
                <p>
                  Nous enrichissons le lien nous unissant à nos clients par le
                  respect de nos engagements contractuels et humains.
                </p>
                <li className="bold">
                  <FontAwesomeIcon icon={faCheck} />
                  Qualité
                </li>
                <p>
                  Nous avons pour raison d’être la satisfaction de nos clients
                  et nous nous assurons de toujours leur offrir un travail de la
                  plus haute qualité.
                </p>
                <li className="bold">
                  <FontAwesomeIcon icon={faCheck} />
                  Intégrité
                </li>
                <p>
                  Nous faisons de l’intégrité une motivation première dans notre
                  activité professionnelle. Elle est reflétée par l’honnêteté,
                  la crédibilité et la transparence dans toutes les relations
                  avec nos clients.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
