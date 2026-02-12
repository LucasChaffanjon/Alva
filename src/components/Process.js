import React, { useEffect, useRef } from "react";
import "./styles/process.scss";
import process1 from "../assets/process1.svg";
import process2 from "../assets/process2.svg";
import process3 from "../assets/process3.svg";
import process4 from "../assets/process4.svg";

const CALENDLY_URL = "https://calendly.com/alvaconciergerie/30min";

const steps = [
  {
    title: "1) Premier contact",
    image: process1,
    cta: "Remplir notre formulaire",
    content: (
      <>
        <p>
          Vous remplissez notre formulaire ou réservez un appel avec notre
          équipe.
        </p>
        <p>
          Nous analysons gratuitement le potentiel de votre logement pour la
          location courte durée à <strong>Besançon</strong> ou{" "}
          <strong>Villeurbanne</strong>.
        </p>
        <p>
          Vous recevez une estimation personnalisée de vos futurs revenus{" "}
          <strong>Airbnb</strong> et <strong>Booking</strong>, basée sur les
          tendances du marché local.
        </p>
      </>
    ),
  },
  {
    title: "2) Création d’annonce professionnelle et stratégie de prix",
    image: process2,
    cta: "Réserver un appel gratuit",
    content: (
      <>
        <p>
          Un photographe professionnel met en valeur votre logement, puis notre
          équipe rédige une annonce optimisée.
        </p>
        <p>
          Nous définissons ensuite une stratégie de{" "}
          <strong>tarification dynamique</strong> adaptée au marché local (
          <strong>Besançon</strong> &amp; <strong>Villeurbanne</strong>) afin de
          maximiser vos revenus.
        </p>
      </>
    ),
  },
  {
    title: "3) Gestion locative complète et professionnelle",
    image: process3,
    cta: "Réserver un appel gratuit",
    content: (
      <>
        <p>
          Nous prenons en charge chaque aspect de la gestion : communication
          avec les voyageurs, check-in / check-out, ménage hôtelier, linge
          premium et interventions de maintenance si nécessaire.
        </p>
        <p>
          Votre bien est géré comme un <strong>hôtel</strong> : vous profitez de
          vos revenus sans contrainte.
        </p>
      </>
    ),
  },
  {
    title: "4) Suivi des performances et optimisation continue",
    image: process4,
    cta: "Réserver un appel gratuit",
    content: (
      <>
        <p>
          Chaque mois, nous vous envoyons un rapport détaillé : revenus générés,
          taux d’occupation, retours voyageurs.
        </p>
        <p>
          Vous suivez la performance de votre logement en toute transparence, et
          nous ajustons la stratégie si nécessaire.
        </p>
      </>
    ),
  },
];

const Process = () => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (cta) => {
    if (cta === "Remplir notre formulaire") {
      const section = document.getElementById("menu");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <div className="process-cont">
      <h1 className="title">
        Comment fonctionne notre conciergerie Airbnb ? <br />
        <span>Notre processus en 4 étapes</span>
      </h1>

      <div className="steps-container">
        {steps.map((s, i) => (
          <div
            key={i}
            className="step-card"
            ref={(el) => (refs.current[i] = el)}
            style={{ "--index": i + 1 }} // On passe l'index au CSS
          >
            <div className="card-content">
              <div className="text-block">
                <h2>{s.title}</h2>
                {s.content}
              </div>
              <div className="media-block">
                <img src={s.image} alt={s.title} />
                <button onClick={() => handleClick(s.cta)}>{s.cta}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
