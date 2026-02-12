import React from "react";
import "./styles/Services.scss";

const Services = () => {
  return (
    <div id="services">
      <div id="services-cont">
        <div className="time">
          <div className="text">
            <h1>Gagner du temps</h1>
            <ul>
              <li>Photos professionnelles pour séduire les voyageurs</li>
              <li>Annonce optimisée pour maximiser les réservations</li>
              <li>Diffusion sur tous nos canaux</li>
              <li>Communication avec les voyageurs</li>
              <li>Gestion des entrées et sorties</li>
              <li>Maintenance</li>
              <li>Nettoyage et gestion du linge</li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div id="a" className="box">
            <h1>Gagner de l'argent</h1>
            <ul>
              <li>Réponses rapides et filtrage des profils</li>
              <li>Organisation des arrivées et départs</li>
              <li>
                Suivi de l’expérience voyageurs pour maintenir une note 5 ★
              </li>
              <li>Création d’une annonce optimisée</li>
              <li>Boost de votre référencement</li>
              <li>Gestion dynamique des prix et des calendriers</li>
            </ul>
          </div>
          <div id="b" className="box">
            <h1>Gagner en sérénité</h1>
            <ul>
              <li>Ménage hôtelier et linge premium</li>
              <li>Interventions de maintenance en cas de besoin</li>
              <li>Rapport régulier sur l’état du logement et vos revenus</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          className="estimation"
          onClick={() => {
            const section = document.getElementById("menu");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Estimer mes revenus locatifs
        </button>
        <button className="rdv">Prendre rendez-vous</button>
      </div>
    </div>
  );
};

export default Services;
