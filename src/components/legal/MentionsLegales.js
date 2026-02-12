import React from "react";
import "./styles/MentionsLegales.scss";
import headerImg from "../../assets/legal.jpg";

const MentionsLegales = () => {
  return (
    <section id="mentions-legales">
      {/* ---------- BANNIÈRE HAUT DE PAGE ---------- */}
      <div className="mentions-hero">
        <img
          src={headerImg}
          alt="Mentions légales Alva Conciergerie"
          className="bg-img"
        />
        <div className="overlay">
          <h1>Mentions légales</h1>
        </div>
      </div>

      {/* ---------- CONTENU ---------- */}
      <div className="mentions-container">
        <section>
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>https://alvaconciergerie.com/</strong> est édité par
            :
          </p>
          <p>
            <strong>ALVA CONCIERGERIE BESANÇON</strong>
            <br />
            Micro Entreprise
            <br />
            RCS Besançon : 990 555 997
            <br />
            Date d’immatriculation : 26/09/2025
            <br />
            Adresse du siège social : 35 Boulevard de la Paix, 92400 Courbevoie,
            France
            <br />
            Directeur de la publication : Pablo Martin
          </p>
        </section>

        <section>
          <h2>2. Hébergeur du site</h2>
          <p>Le site est hébergé par :</p>
          <p>
            <strong>Hostinger</strong>
            <br />
            Adresse : Lordou Vyrona 61, Larnaca 7550, Chypre
            <br />
            Contact : +370 645 03378
          </p>
        </section>

        <section>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            Le contenu du site, incluant les textes, images, logos et
            graphiques, est la propriété de{" "}
            <strong>ALVA CONCIERGERIE BESANÇON</strong> ou de ses partenaires,
            et est protégé par la législation sur les droits d’auteur. Toute
            reproduction, distribution ou utilisation non autorisée est
            interdite.
          </p>
        </section>

        <section>
          <h2>4. Protection des données personnelles</h2>
          <p>
            Les informations collectées sur ce site sont traitées conformément à
            notre politique de confidentialité. Nous collectons uniquement les
            données nécessaires à la gestion de votre demande et nous nous
            engageons à respecter la confidentialité de vos informations.
          </p>
        </section>

        <section>
          <h2>5. Responsabilité</h2>
          <p>
            <strong>ALVA CONCIERGERIE BESANÇON</strong> met en œuvre tous les
            moyens nécessaires pour garantir le bon fonctionnement du site.
            Cependant, nous ne pouvons être tenus responsables de tout dommage
            direct ou indirect résultant de l’utilisation du site.
          </p>
        </section>

        <section>
          <h2>6. Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites externes.{" "}
            <strong>ALVA CONCIERGERIE BESANÇON</strong> ne saurait être
            responsable du contenu ou de la politique de confidentialité de ces
            sites.
          </p>
        </section>

        <section>
          <h2>7. Cookies</h2>
          <p>
            Le site utilise des cookies pour améliorer l’expérience de
            navigation. Vous pouvez gérer vos préférences de cookies directement
            dans votre navigateur.
          </p>
        </section>

        <section>
          <h2>8. Loi applicable et juridiction</h2>
          <p>
            Le site est régi par la législation française. En cas de litige, les
            tribunaux compétents seront ceux du ressort du siège social de{" "}
            <strong>ALVA CONCIERGERIE BESANÇON</strong>.
          </p>
        </section>
      </div>
    </section>
  );
};

export default MentionsLegales;
