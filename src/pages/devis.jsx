import React, { Component } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

/*my imports */
import "./devis.css";

const Devis = () => {
  const form2 = useRef();
  const sendEmail2 = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_05pfhie",
        "template_dgpp9pl",
        form2.current,
        "hNTnCyySNf30nQAOa"
      )
      .then(
        (result) => {
          alert("Votre devis a été bien envoyé!");
        },
        (error) => {
          alert("Echec d'envoie du devis!");
        }
      );

    e.target.reset();
  };
  return (
    <div className="devis-bg-color">
      <div className="container devis-layout pb-5">
        <h1 className=" devis-title py-5">RECEVEZ UNE OFFRE</h1>
        <form action="/devis" method="post" ref={form2} onSubmit={sendEmail2}>
          <div class="my-3">
            <label for="demande" class="form-label">
              Décrivez votre demande
            </label>
            <textarea
              class="form-control"
              id="demande"
              rows="5"
              name="message"
            ></textarea>
          </div>
          <div className="grid mt-4">
            <h3>Cordonnées</h3>
            <div className="row">
              <div className="col-6">
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Prénom/Nom *
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">
                    Téléphone / GSM *
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="code" class="form-label">
                    Code Postale
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="code"
                    name="zip"
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">
                    Adresse
                  </label>
                  <input type="text" class="form-control" id="address" />
                </div>
                <div class="mb-3">
                  <label for="city" class="form-label">
                    Ville *
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    name="city"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row devis-btn">
              <button
                className="btn btn-outline-secondary btn-lg first-btn-item"
                type="submit"
              >
                DEMANDEZ VOTRE DEVIS
              </button>
            </div>
          </div>
        </form>
        <div className="row devis-btn mt-3">
          <a
            className="btn btn-secondary btn-lg second-btn-item"
            href="tel:+212 660 247 217"
          >
            Vous pouvez également appeler directement le 06-xx-xx-xx-xx
          </a>
        </div>
      </div>
    </div>
  );
};

export default Devis;
