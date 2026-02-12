import React from "react";
import "./styles/Presentation.scss";

const Presentation = () => {
  return (
    <div className="Presentation">
      <section className="intro">
        <p>
          Chez <strong>Alva Conciergerie</strong>, nous allons bien au-delà de
          la simple gestion locative. Nous combinons :
        </p>
      </section>

      <ul className="points">
        <li>
          <strong>Proximité locale :</strong> Une équipe basée à Besançon et
          Villeurbanne, qui connaît parfaitement le marché et les quartiers
          attractifs.
        </li>
        <li>
          <strong>Optimisation de vos revenus :</strong> Stratégies de
          tarification dynamique et diffusion multi-plateformes pour maximiser
          vos revenus locatifs.
        </li>
        <li>
          <strong>Relation humaine et réactive :</strong> Un contact unique,
          disponible et attentif à votre logement et vos voyageurs.
        </li>
        <li>
          <strong>Expérience voyageur améliorée :</strong> Chaque logement
          reçoit un guide touristique personnalisé et un QR code interactif pour
          découvrir les meilleures activités et restaurants locaux.
        </li>
        <li>
          <strong>Digitalisation de la gestion :</strong> Vidéos explicatives
          pour la remise des clés, communication centralisée via WhatsApp, suivi
          en temps réel des réservations.
        </li>
        <li>
          <strong>Transparence financière :</strong> Bulletin mensuel détaillé
          et bilan complet pour suivre les revenus, le taux d’occupation et les
          avis voyageurs.
        </li>
      </ul>

      <p className="conclusion">
        Contrairement aux grandes conciergeries impersonnelles, nous misons sur
        la réactivité, la transparence et la confiance durable avec chaque
        propriétaire.
      </p>

      <section className="types">
        <h3>Quels types de biens gérons-nous ?</h3>
        <p>Nous prenons en charge tous types de logements :</p>
        <ul className="property-list">
          <li>Studios</li>
          <li>Appartements T2 à T4</li>
          <li>Maisons</li>
        </ul>

        <p>
          Chaque bien étant unique, nous adaptons nos stratégies de tarification
          et de diffusion selon :
        </p>
        <ul className="criteria-list">
          <li>Ses caractéristiques</li>
          <li>Son emplacement</li>
          <li>
            Le profil des voyageurs ciblés (touristes, professionnels en court
            séjour, étudiants)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Presentation;
