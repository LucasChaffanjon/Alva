import React, { useState } from "react";
import "./styles/contact.scss";
import imgbg from "../../assets/accueil2.png";
import contactImg from "../../assets/img.svg";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSczdN5aQmgyirWiH12SkNu2rcH5HL0KVoWUKyf_M7uVJm1vrg/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section className="contact-page">
      <img src={imgbg} alt="imgbg" className="background-top" />
      <div className="overlay">
        <h1 className="title">
          Nous sommes là <span>pour vous accompagner</span>
        </h1>

        <div className="contact-box">
          <div className="contact-left">
            <img className="img2" src={contactImg} alt="Conseillère" />
          </div>

          <div className="contact-right">
            <h2>Contactez–Nous</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-field">
                  <label>Prénom</label>
                  <input
                    type="text"
                    name="entry.1296393333"
                    placeholder="Prénom"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Nom</label>
                  <input
                    type="text"
                    name="entry.150465340"
                    placeholder="Nom"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="entry.392228547"
                    placeholder="Adresse e-mail"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Numéro de téléphone</label>
                  <input
                    type="tel"
                    name="entry.1948236195"
                    placeholder="N° de téléphone"
                  />
                </div>
              </div>

              <div className="textarea-field">
                <label>Message</label>
                <textarea
                  name="entry.592873206"
                  rows="5"
                  placeholder="..."
                  required
                />
              </div>

              <button type="submit">Envoyer</button>

              {status === "success" && (
                <p style={{ color: "green", marginTop: "10px" }}>
                  Merci, votre message a bien été envoyé !
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  Une erreur est survenue, veuillez réessayer.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
