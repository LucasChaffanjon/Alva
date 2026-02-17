import React, { useEffect, useRef, useState } from "react";
import "./styles/Avantages.scss";
import euro from "../../assets/euro.png";
import peace from "../../assets/peace.png";
import balance from "../../assets/balance.png";
import { useNavigate } from "react-router-dom";

const Avantages = () => {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="avantages">
      <p className="title">
        Pourquoi faire appel à <br /> <strong>Alva Conciergerie ?</strong>
      </p>

      <ul
        ref={listRef}
        className={`avantages-list ${visible ? "visible" : ""}`}
      >
        <li className="bloc">
          <img src={euro} alt="euro" className="icon" />
          <h1>REVENUS LOCATIFS OPTIMISÉS</h1>
          <p>
            Grâce à notre <strong>tarification dynamique</strong> et une
            diffusion sur
            <strong> Airbnb, Booking.com et Abritel</strong>, votre logement
            gagne en visibilité.
          </p>
          <p>
            Résultat : plus de réservations et jusqu'à{" "}
            <strong>+35 % de revenus locatifs</strong> à Besançon et
            Villeurbanne.
          </p>
        </li>

        <li className="bloc">
          <img src={peace} alt="peace" className="icon" />
          <h1>GESTION SANS STRESS DE VOTRE BIEN</h1>
          <p>
            <strong>Alva Conciergerie</strong> s’occupe de tout : accueil des
            voyageurs, ménage hôtelier, linge premium et urgences{" "}
            <strong>7j/7</strong>.
          </p>
          <p>
            Vous profitez d’une <strong>gestion locative clé en main</strong>,
            sans la moindre contrainte.
          </p>
        </li>

        <li className="bloc">
          <img src={balance} alt="balance" className="icon" />
          <h1>TRANSPARENCE TOTALE SUR VOS REVENUS</h1>
          <p>
            Chaque mois, recevez un <strong>rapport complet</strong> avec vos
            revenus, votre taux d’occupation et les avis voyageurs.
          </p>
          <p>
            Une conciergerie <strong>Airbnb fiable et locale</strong>, centrée
            sur la rentabilité de votre bien.
          </p>
        </li>
      </ul>

      <div id="buttons-cont">
        <button
          className="estimation"
          onClick={() => {
            const isMobile = window.innerWidth <= 1024;
            navigate("/", { state: { openForm: isMobile } });
            const section = document.getElementById("menu");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Estimer mes revenus locatifs
        </button>
        <button
          className="rdv"
          onClick={() =>
            window.open(
              "https://calendly.com/alvaconciergerie/30min?lid=ygjvde2x51fh&utm_medium=email&utm_source=braze&utm_campaign=2024Q4-NUR-TRIAL-ONB-ALL_ROLES-EN-Pers_Core_Onboarding&utm_content=user_url_text&back=1&month=2025-12",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Prendre rendez-vous
        </button>
      </div>
    </div>
  );
};

export default Avantages;
