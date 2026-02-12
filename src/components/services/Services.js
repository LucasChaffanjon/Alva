import React, { useState } from "react";
import "./styles/services.scss";

import headerImg from "../../assets/servicesbg.svg";
import photo1 from "../../assets/temps.svg";
import photo2 from "../../assets/argent.svg";
import photo3 from "../../assets/serenite.svg";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <h3 onClick={onClick}>
        {title}
        <span className="arrow">{isOpen ? "−" : "+"}</span>
      </h3>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services">
      {/* ---------- HEADER ---------- */}
      <div className="intro-section">
        <img
          src={headerImg}
          alt="services Alva Conciergerie"
          className="bg-img"
        />
        <div className="overlay">
          <h1>
            Nos <em>services</em>
          </h1>
          <p className="intro-text">
            Découvrez nos services sur-mesure pour optimiser la gestion de votre
            bien et maximiser vos revenus locatifs en location courte durée.
          </p>
        </div>
      </div>
      <div className="intro-text-mobile">
        Découvrez nos services sur-mesure pour{" "}
        <span>
          optimiser la gestion de votre bien et maximiser vos revenus locatifs
        </span>{" "}
        en location courte durée.
      </div>

      {/* ---------- 1. GAGNEZ DU TEMPS ---------- */}
      <div className="section">
        <h2>Gagnez du temps</h2>
        <p>
          Économisez un maximum de temps : nous prenons en charge chaque étape,
          du check-in au check-out, en passant par le ménage, le linge et les
          échanges avec vos voyageurs. Vous percevez vos revenus en toute
          sérénité.
        </p>

        <div className="service-bloc">
          <img src={photo1} alt="Gagnez du temps" />

          <div className="text">
            <AccordionItem
              title="Photos professionnelles pour valoriser votre bien"
              content="Nous réalisons des photos de qualité professionnelle qui mettent en avant chaque atout de votre logement sur Besançon et Villeurbanne. Un visuel soigné attire davantage de voyageurs, suscite le coup de cœur dès la première impression et augmente le taux de réservation."
              isOpen={openIndex === 0}
              onClick={() => toggle(0)}
            />

            <AccordionItem
              title="Rédaction d’annonces optimisées et diffusion multi-plateformes"
              content="Nos experts créent une annonce claire, attractive et optimisée pour le référencement. Elle est ensuite diffusée sur toutes les grandes plateformes (Airbnb, Booking, Abritel…) afin de maximiser la visibilité de votre bien et d’assurer un taux d’occupation élevé."
              isOpen={openIndex === 1}
              onClick={() => toggle(1)}
            />

            <AccordionItem
              title="Communication voyageurs et gestion complète des séjours"
              content="Nous prenons en charge l’intégralité des échanges avec vos voyageurs, du premier message à leur départ. Réponses rapides, organisation des arrivées et départs, transmission des informations pratiques et gestion des imprévus : nous garantissons un séjour sans stress pour vos hôtes et des avis positifs pour vous."
              isOpen={openIndex === 2}
              onClick={() => toggle(2)}
            />
          </div>
        </div>
      </div>

      {/* ---------- 2. GAGNEZ DE L’ARGENT ---------- */}
      <div className="section">
        <h2>Gagnez de l’argent</h2>
        <p>
          Optimisez la rentabilité de votre logement grâce à une stratégie
          complète : tarification dynamique, annonces optimisées et
          référencement renforcé sur Airbnb et Booking.
        </p>

        <div className="service-bloc reverse">
          <img src={photo2} alt="Gagnez de l’argent" />

          <div className="text">
            <AccordionItem
              title="Tarification dynamique et événements locaux"
              content="Nous ajustons vos prix en temps réel selon la saisonnalité, les événements de la région et la demande du marché. Cette stratégie permet d’optimiser vos revenus et de garantir un taux d’occupation constant tout au long de l’année."
              isOpen={openIndex === 3}
              onClick={() => toggle(3)}
            />

            <AccordionItem
              title="Référencement optimisé pour augmenter vos réservations"
              content="Nos annonces sont travaillées pour être mises en avant sur les plateformes comme Airbnb, Booking et Abritel. Un meilleur positionnement signifie plus de visibilité, plus de réservations et donc plus de revenus."
              isOpen={openIndex === 4}
              onClick={() => toggle(4)}
            />

            <AccordionItem
              title="Expérience voyageurs 5★ pour booster vos revenus et fidéliser vos clients"
              content="En assurant un service irréprochable à chaque séjour, nous favorisons les avis positifs et la fidélisation des voyageurs. Un logement bien noté attire naturellement plus de réservations en augmentant le classement du référencement de votre bien tout en permettant d’appliquer des tarifs plus élevés."
              isOpen={openIndex === 5}
              onClick={() => toggle(5)}
            />
          </div>
        </div>
      </div>

      {/* ---------- 3. GAGNEZ EN SÉRÉNITÉ ---------- */}
      <div className="section">
        <h2>Gagnez en sérénité</h2>
        <p>
          Confiez-nous votre logement et profitez d’une tranquillité totale :
          votre bien reste impeccable, vos voyageurs satisfaits, et vous
          percevez vos revenus sans stress.
        </p>

        <div className="service-bloc">
          <img src={photo3} alt="Gagnez en sérénité" />

          <div className="text">
            <AccordionItem
              title="Ménage hôtelier et linge premium"
              content="Chaque séjour commence et se termine dans un logement impeccable. Nous assurons un ménage professionnel et mettons à disposition du linge de qualité pour offrir une expérience haut de gamme."
              isOpen={openIndex === 6}
              onClick={() => toggle(6)}
            />

            <AccordionItem
              title="Interventions rapides en cas de problème"
              content="Notre équipe reste disponible pour réagir immédiatement aux imprévus : panne, casse ou besoin technique. Votre bien est entretenu et vos voyageurs restent satisfaits en toutes circonstances."
              isOpen={openIndex === 7}
              onClick={() => toggle(7)}
            />

            <AccordionItem
              title="Rapports mensuels détaillés et transparents"
              content="Chaque mois, vous recevrez un suivi complet : revenus générés, taux d’occupation, retours voyageurs. Vous gardez le contrôle tout en déléguant la gestion au quotidien."
              isOpen={openIndex === 8}
              onClick={() => toggle(8)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
