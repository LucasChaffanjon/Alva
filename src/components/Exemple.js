import React from "react";
import "./styles/exemple.scss";
import process4 from "../assets/menuimg.webp";

const Exemple = () => {
  return (
    <section className="Exemple">
      <h2>Exemple concret à Villeurbanne</h2>

      <div className="text">
        {/* Images décoratives */}
        <img
          src={process4}
          alt="illustration décorative"
          className="decor decor-top"
        />
        <img
          src={process4}
          alt="illustration décorative"
          className="decor decor-bottom"
        />

        <div className="bloc">
          <h3>Le projet :</h3>
          <p>
            Claire a investi dans un T2 proche de la Part-Dieu. En confiant son
            bien à <strong>Alva Conciergerie</strong>, elle a pu transformer son
            appartement en location courte durée rentable dès le premier mois.
          </p>
        </div>

        <div className="bloc">
          <h3>La location du bien :</h3>
          <ul>
            <li>
              Prix moyen par nuit : <strong>110 €</strong> (net de la commission
              Airbnb)
            </li>
            <li>
              Nombre de nuits réservées par mois : <strong>18</strong>
            </li>
          </ul>
        </div>

        <div className="bloc">
          <h3>La facturation du service :</h3>
          <ul>
            <li>
              Commission Alva Conciergerie : <strong>20 %</strong> (incluant
              communication, check-in/out, ménage, linge et maintenance)
            </li>
            <li>
              Frais de ménage : <strong>45 €</strong> (réglés directement par
              les voyageurs à chaque réservation)
            </li>
            <li>
              Frais de réapprovisionnement : <strong>15 € / mois</strong>{" "}
              (produits d’accueil et consommables de base)
            </li>
          </ul>
        </div>

        <div className="bloc calcul">
          <h3>Calcul du revenu locatif :</h3>
          <ul>
            <li>
              110 € × 18 nuits = <strong>1 980 €</strong>
            </li>
            <li>
              Commission (20 %) : <strong>396 €</strong>
            </li>
            <li>
              Frais de réapprovisionnement : <strong>15 €</strong>
            </li>
            <li>
              Revenu net propriétaire :{" "}
              <strong>1 980 – 396 – 15 = 1 569 €</strong>
            </li>
          </ul>

          <p className="resultat">
            👉 Dans la poche de Claire : <strong>1 569 €</strong> pour un mois
            de location.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Exemple;
