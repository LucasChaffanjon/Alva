// Besancon.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/secteur.scss";

import headerBg from "../../assets/villeurbannemap.svg";
import besanconCity from "../../assets/villeurbanne.svg";
import ppb from "../../assets/ppa.jpeg";
import ppa from "../../assets/ppb.jpeg";
import vmob from "../../assets/vmob.svg";

const Besancon = () => {
  const navigate = useNavigate();

  const data = {
    title: (
      <>
        Nous sommes à <span className="city-highlight">Villeurbanne</span> et
        ses alentours
      </>
    ),
    ctaTop: "Simuler mes revenus",
    introLeft:
      "Aux portes de Lyon, Villeurbanne est un marché en pleine croissance grâce à sa proximité avec la Part-Dieu, le campus de la Doua et des quartiers dynamiques comme Gratte-Ciel et Charpennes.",
    paragraphTop:
      "Aux portes de Lyon, Villeurbanne offre un cadre dynamique et recherché pour la location courte durée. Avec notre présence locale, nous aidons les propriétaires à rentabiliser leur bien en offrant une expérience irréprochable aux voyageurs.",
    bullets: [
      "Positionnement idéal pour étudiants, professionnels en déplacement et voyageurs de passage.",
      "Tarification dynamique selon les flux lyonnais et événements majeurs.",
      "Revenus réguliers grâce à une demande soutenue.",
    ],
    quote:
      "Nous déposons dans chaque logement un guide personnalisé des meilleures activités, restaurants et adresses locales de Villeurbanne, pour offrir à vos voyageurs une expérience inoubliable",
    managersTitle: "Nos gérants à Villeurbanne et alentours",
  };

  return (
    <section className="secteur-page secteur-besancon">
      <div
        className="secteur-hero"
        style={{
          "--bg-desktop": `url(${headerBg})`,
          "--bg-mobile": `url(${vmob})`,
        }}
      >
        <p className="hero-tag">Villeurbanne & ses alentours</p>
        <div className="hero-inner">
          <div className="hero-text">
            <h1>{data.title}</h1>
            <p className="hero-intro">{data.introLeft}</p>
          </div>
        </div>
      </div>

      <div className="secteur-container">
        <button
          className="primary-cta"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          {data.ctaTop}
        </button>
        <div className="detail-layout">
          <div className="detail-text">
            <p className="detail-intro">{data.paragraphTop}</p>
            <ul className="detail-list">
              {data.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <div className="quote-block">
              <p>{data.quote}</p>
            </div>
          </div>

          <div className="city-photo-card">
            <img src={besanconCity} alt="Ville de Besançon" />
          </div>
        </div>

        <div className="managers-block">
          <h2>{data.managersTitle}</h2>
          <div className="managers-content">
            <div className="avatars">
              <img src={ppa} alt="ppa" className="avatar-circle" />
              <img src={ppb} alt="ppb" className="avatar-circle" />
              <div className="owners-count">
                <span className="number">+6</span>
                <span className="label">propriétaires accompagnés</span>
              </div>
            </div>
            <p>
              Notre équipe locale accompagne les propriétaires Villeurbannais
              pour une gestion locative courte durée sereine, performante et
              parfaitement adaptée au marché de Villeurbanne.
            </p>
          </div>
        </div>

        {/* Liens bas de page */}
        <div className="bottom-links">
          <div className="services-link">
            <p>
              Découvrez aussi nos{" "}
              <span
                onClick={() => {
                  navigate("/service");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                services
              </span>
              .
            </p>
          </div>

          <Link
            to="/contact"
            className="secondary-cta"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Besancon;
