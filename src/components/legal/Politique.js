import React from "react";
import "./styles/Politique.scss";
import headerImg from "../../assets/politique.jpg";

const Politique = () => {
  return (
    <section id="politique">
      {/* ---------- BANNIÈRE HAUT ---------- */}
      <div className="politique-hero">
        <img
          src={headerImg}
          alt="politique de confidentialité"
          className="bg-img"
        />
        <div className="overlay">
          <h1>Politique de confidentialité</h1>
        </div>
      </div>

      {/* ---------- CONTENU ---------- */}
      <div className="politique-container">
        <section>
          <h2>1. Introduction</h2>
          <p>
            La présente politique de confidentialité a pour but de vous informer
            sur la manière dont
            <strong> ALVA CONCIERGERIE BESANÇON</strong> (ci-après « nous » ou «
            notre ») collecte, utilise, et protège vos données personnelles
            lorsque vous utilisez le site
            <strong> https://alvaconciergerie.com/</strong>. Nous nous engageons
            à respecter la confidentialité de vos données et à les protéger
            conformément aux lois en vigueur.
          </p>
        </section>

        <section>
          <h2>2. Collecte des données personnelles</h2>
          <p>Nous collectons des informations personnelles lorsque vous :</p>
          <ul>
            <li>Remplissez un formulaire de contact (nom, email, téléphone)</li>
            <li>Utilisez nos services ou effectuez une commande</li>
          </ul>
          <p>
            Les informations collectées peuvent inclure des données de contact
            (prénom, nom, adresse email, numéro de téléphone) ainsi que d’autres
            informations nécessaires à la gestion de nos services.
          </p>
        </section>

        <section>
          <h2>3. Utilisation des données</h2>
          <p>Les données personnelles collectées servent à :</p>
          <ul>
            <li>Répondre à vos demandes et fournir nos services</li>
            <li>Gérer les demandes de renseignements et le support</li>
            <li>Améliorer nos services et la performance du site</li>
            <li>Envoyer des informations marketing avec votre consentement</li>
          </ul>
        </section>

        <section>
          <h2>4. Partage des données</h2>
          <p>
            Nous ne vendons pas vos données personnelles à des tiers. Cependant,
            nous pouvons partager vos informations avec :
          </p>
          <ul>
            <li>
              Nos prestataires (hébergeur, outils logiciels, services
              techniques)
            </li>
            <li>Les autorités compétentes si la loi l'exige</li>
          </ul>
        </section>

        <section>
          <h2>5. Sécurité des données</h2>
          <p>
            Nous appliquons des mesures techniques et organisationnelles pour
            protéger vos données personnelles contre tout accès non autorisé,
            perte ou altération.
          </p>
        </section>

        <section>
          <h2>6. Vos droits</h2>
          <p>Conformément à la loi, vous pouvez :</p>
          <ul>
            <li>Demander l’accès à vos données personnelles</li>
            <li>Demander la rectification des données incorrectes</li>
            <li>Demander la suppression de vos données</li>
            <li>Vous opposer au marketing direct</li>
            <li>Demander la portabilité de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits :{" "}
            <strong>alvaconciergerie@gmail.com</strong>
          </p>
        </section>

        <section>
          <h2>7. Conservation des données</h2>
          <p>
            Les données sont conservées uniquement le temps nécessaire à la
            gestion de vos demandes ou au respect des obligations légales.
          </p>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience. Vous
            pouvez gérer leur utilisation via les paramètres de votre
            navigateur.
          </p>
        </section>

        <section>
          <h2>9. Modifications de la politique</h2>
          <p>
            Nous pouvons mettre à jour cette politique à tout moment. En cas de
            modification importante, vous en serez informé par un message sur le
            site.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Politique;
