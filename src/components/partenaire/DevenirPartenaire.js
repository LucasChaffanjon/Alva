import React, { useState } from "react";
import "./styles/devenirpartenaire.scss";
import img1 from "../../assets/partenaire.svg";

const DevenirPartenaire = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSffEawo8kVAPTAzSSM752jIITb8HU7aNj4v9dHzxXrwqGHjbA/formResponse",
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
    <section className="partenaire-page">
      <div className="intro-section">
        <img
          src={img1}
          alt="Devenir partenaire Alva Conciergerie"
          className="bg-img"
        />
        <div className="overlay">
          <h1>
            Devenir <em>partenaire</em>
          </h1>

          <p className="partenaire-intro">
            Rejoignez notre réseau de partenaires locaux et participez à une
            expérience voyageur haut de gamme. Nous valorisons les acteurs
            locaux et offrons à nos hôtes un séjour complet et mémorable.
          </p>
        </div>
      </div>

      <div className="partenaire-intro-mobile">
        Rejoignez notre réseau de <span>partenaires locaux</span> et participez
        à une expérience voyageur haut de gamme. Nous valorisons les acteurs
        locaux et offrons à nos hôtes un séjour complet et mémorable.
      </div>

      <div className="content">
        <div className="reasons">
          <h2>Pourquoi devenir partenaire ?</h2>
          <ul>
            <li>
              <strong>Visibilité accrue :</strong> Vos services et
              établissements sont recommandés directement à nos voyageurs Airbnb
              et Booking.
            </li>
            <li>
              <strong>Collaboration gagnant-gagnant :</strong> Ensemble, nous
              créons de la valeur et enrichissons l’expérience client.
            </li>
            <li>
              <strong>Opportunités durables :</strong> Partenariat local et
              pérenne basé sur la confiance et la qualité de service.
            </li>
          </ul>
        </div>

        <div className="form-section">
          <h2>Formulaire de contact</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-field">
                <label>Prénom</label>
                <input
                  type="text"
                  name="entry.1999124598"
                  placeholder="Prénom"
                  required
                />
              </div>

              <div className="input-field">
                <label>Nom</label>
                <input
                  type="text"
                  name="entry.1638746663"
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
                  name="entry.234308857"
                  placeholder="Adresse e-mail"
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <label>Secteur d’activité</label>
              <select name="entry.808639517" required defaultValue="">
                <option value="" disabled>
                  Sélectionnez votre secteur
                </option>
                <option value="Restaurant et bar locaux">
                  Restaurants &amp; bars locaux
                </option>
                <option value="Activités touristiques et culturelles">
                  Activités touristiques &amp; culturelles
                </option>
                <option value="Clubs et loisirs sportifs">
                  Clubs &amp; loisirs sportifs
                </option>
                <option value="Prestataire bien être">
                  Prestataires bien-être
                </option>
                <option value="Chef cuisinier et traiteur privé">
                  Chefs cuisiniers &amp; traiteurs privés
                </option>
                <option value="Apporteur d'affaire">
                  Apporteurs d’affaires
                </option>
                <option value="Stagiaire et jeune talent">
                  Stagiaires &amp; jeunes talents
                </option>
              </select>
            </div>

            <div className="input-field">
              <label>Message</label>
              <textarea
                name="entry.1639638772"
                rows="5"
                placeholder="Votre message..."
              />
            </div>

            <button type="submit" className="cta-btn">
              Rejoignez notre réseau dès aujourd’hui
            </button>

            {status === "success" && (
              <p style={{ color: "green", marginTop: "10px" }}>
                Merci, votre formulaire a bien été envoyé !
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "red", marginTop: "10px" }}>
                Oups, une erreur est survenue… Réessayez plus tard.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default DevenirPartenaire;
