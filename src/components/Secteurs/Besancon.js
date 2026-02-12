// Besancon.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/secteur.scss";

import headerBg from "../../assets/besanconmap.svg";
import besanconCity from "../../assets/besancon.svg";
import ppa from "../../assets/ppa.jpeg";
import ppb from "../../assets/ppb.jpeg";
import bmob from "../../assets/bmob.svg";

const Besancon = () => {
  const navigate = useNavigate();

  const data = {
    title: (
      <>
        Nous sommes à <span className="city-highlight">Besançon</span> et ses
        alentours
      </>
    ),
    ctaTop: "Simuler mes revenus",
    introLeft:
      "Ville au patrimoine historique et culturel exceptionnel, Besançon attire aussi bien les touristes que les voyageurs d’affaires.",
    paragraphTop:
      "Située au cœur de la Bourgogne-Franche-Comté, Besançon séduit par son patrimoine, sa douceur de vivre et son attractivité touristique. Notre équipe locale accompagne les propriétaires bisontins dans une gestion locative courte durée complète et sereine.",
    bullets: [
      "Nous gérons vos biens dans les quartiers les plus recherchés : La Boucle, Battant, Saint-Claude…",
      "Stratégies adaptées à la demande locale.",
      "Valorisation de votre logement grâce aux événements culturels et touristiques.",
      "Optimisation du taux d’occupation toute l’année.",
    ],
    quote:
      "Nous déposons dans chaque logement un guide personnalisé des meilleures activités, restaurants et adresses locales de Besançon, pour offrir à vos voyageurs une expérience inoubliable.",
    managersTitle: "Nos gérants à Besançon et alentours",
  };

  return (
    <section className="secteur-page secteur-besancon">
      <div
        className="secteur-hero"
        style={{
          "--bg-desktop": `url(${headerBg})`,
          "--bg-mobile": `url(${bmob})`,
        }}
      >
        <p className="hero-tag">Besançon & ses alentours</p>
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

        {/* Nos gérants */}
        <div className="managers-block">
          <h2>{data.managersTitle}</h2>
          <div className="managers-content">
            <div className="avatars">
              <img src={ppa} alt="ppa" className="avatar-circle" />
              <img src={ppb} alt="ppb" className="avatar-circle" />
              <div className="owners-count">
                <span className="number">+9</span>
                <span className="label">propriétaires accompagnés</span>
              </div>
            </div>
            <p>
              Notre équipe locale accompagne les propriétaires bisontins pour
              une gestion locative courte durée sereine, performante et
              parfaitement adaptée au marché de Besançon.
            </p>
          </div>
        </div>

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
