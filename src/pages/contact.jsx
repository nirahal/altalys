import React, { Component } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

/*my imports*/
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_05pfhie",
        "template_9cyhmwh",
        form.current,
        "hNTnCyySNf30nQAOa"
      )
      .then(
        (result) => {
          alert("votre email a été bien envoyé!");
        },
        (error) => {
          alert("Echec d'envoie du mail!");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-bg">
      <div className="container contact-layout">
        <h1 className=" mb-5 contact-title">Contactez-nous</h1>

        <div className="grid">
          <div className="row">
            <div className="col-md-6 ">
              <form
                action="/contact"
                method="post"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nom"
                    name="firstName"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Prénom"
                    name="lastName"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email@example.com"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Télephone"
                    name="phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="object"
                    placeholder="Objet"
                    name="object"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Votre message"
                    name="message"
                  ></textarea>
                </div>
                <button
                  className="btn btn-outline-success send-button"
                  type="submit"
                >
                  Envoyer
                </button>
              </form>
            </div>

            <div className="col-md-6 contact-sections">
              <div className="contact-section">
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                <div>
                  <a href="">
                    <b className="bold">TEL : </b>05 xxx xxx xxx
                  </a>
                  <br />
                  <a href="tel:+212 660 247 217">+212 660 247 217</a>
                  <br />
                  <b className="bold">FAX : </b>+212 520 247 217
                  <br />
                </div>
              </div>
              <div className="contact-section">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                <div>
                  <b className="bold">EMAIL : </b>
                  <br />
                  <a href="mailto:mesfar@altalys.com">Mesfar@altalys.com</a>
                  <br />
                  <a href="mailto:contact@altalys.ma">Contact@altalys.ma</a>
                </div>
              </div>
              <div className="contact-section">
                <a
                  href="https://www.google.com/maps/?q=Angle Bd.Abdelmoumen & Rue Soumaya Rés. Shehrazade 3 4ème
                      étage n°20 Palmiers - Casablanca"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faMap} className="map-icon" />
                  <div>
                    <b className="bold">Adresse : </b>
                    <br />
                    Angle Bd.Abdelmoumen & Rue Soumaya Rés. Shehrazade 3 4ème
                    étage n°20 Palmiers - Casablanca
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
