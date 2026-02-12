import React, { useState } from "react";
import "./styles/faq.scss";
import { useNavigate } from "react-router-dom";

import headerImg from "../../assets/faq.svg";

import img1 from "../../assets/faq1.svg";
import img2 from "../../assets/faq2.svg";
import img3 from "../../assets/faq3.svg";
import img4 from "../../assets/faq4.svg";
import img5 from "../../assets/faq5.svg";
import img6 from "../../assets/faq6.svg";

const Faq = () => {
  const navigate = useNavigate();
  const [openIndexBySection, setOpenIndexBySection] = useState({});

  // Fonction pour gérer le clic sur le bouton spécifique
  const handleFaqBtnClick = () => {
    navigate("/service");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    {
      key: "apropos",
      title: "À propos d’Alva Conciergerie",
      items: [
        {
          q: "Pourquoi choisir Alva Conciergerie plutôt qu’une autre conciergerie ?",
          a: (
            <>
              Chez Alva Conciergerie, nous allons bien au-delà de la simple
              gestion locative. Nous combinons :
              <ul>
                <li>
                  <strong>Proximité locale :</strong> Une équipe basée à
                  Besançon et Villeurbanne, qui connaît parfaitement le marché
                  et les quartiers attractifs.
                </li>
                <li>
                  <strong>Optimisation de vos revenus :</strong> Stratégies de
                  tarification dynamique et diffusion multi-plateformes pour
                  maximiser vos revenus locatifs.
                </li>
                <li>
                  <strong>Relation humaine et réactive :</strong> Un contact
                  unique, disponible et attentif à votre logement et vos
                  voyageurs.
                </li>
                <li>
                  <strong>Expérience voyageur améliorée :</strong> Guide
                  touristique personnalisé et QR code interactif pour découvrir
                  les meilleures activités et restaurants locaux.
                </li>
                <li>
                  <strong>Digitalisation de la gestion :</strong> Vidéos
                  explicatives pour la remise des clés, communication
                  centralisée via WhatsApp, suivi en temps réel des
                  réservations.
                </li>
                <li>
                  <strong>Transparence financière :</strong> Bulletin mensuel
                  détaillé et bilan complet pour suivre les revenus, le taux
                  d’occupation et les avis voyageurs.
                </li>
              </ul>
              Contrairement aux grandes conciergeries impersonnelles, nous
              misons sur la réactivité, la transparence et la confiance durable
              avec chaque propriétaire.
            </>
          ),
        },
        {
          q: "Quels types de biens gérons-nous ?",
          a: (
            <>
              Nous prenons en charge tous types de logements :
              <ul>
                <li>Studios</li>
                <li>Appartements T2 à T5</li>
                <li>Maisons</li>
              </ul>
              Chaque bien étant unique, nous adaptons nos stratégies de
              tarification et de diffusion selon :
              <ul>
                <li>Ses caractéristiques</li>
                <li>Son emplacement</li>
                <li>
                  Le profil des voyageurs ciblés (touristes, professionnels en
                  court séjour, étudiants)
                </li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      key: "proprio",
      title: "Pour les propriétaires Airbnb",
      items: [
        {
          q: "Puis-je toujours utiliser mon logement pour moi-même ?",
          a: (
            <>
              Oui, absolument. En tant que propriétaire, vous gardez la liberté
              totale sur votre bien. Vous pouvez bloquer les dates que vous
              souhaitez pour en profiter personnellement ou pour vos proches. Il
              vous suffit de nous prévenir afin que le calendrier soit ajusté en
              évitant toute double réservation.
            </>
          ),
        },
        {
          q: "Comment êtes-vous sûrs d’optimiser mes revenus ?",
          a: (
            <>
              Nous utilisons une tarification dynamique qui ajuste vos prix
              selon la saison, les événements locaux et la demande. Vos annonces
              sont également diffusées sur plusieurs plateformes (Airbnb,
              Booking, Abritel), garantissant une visibilité maximale. Cette
              combinaison permet d’augmenter le taux d’occupation et donc vos
              revenus nets comparé à une gestion classique.
            </>
          ),
        },
        {
          q: "Mon logement sera-t-il bien entretenu ?",
          a: (
            <>
              Oui. Chaque départ est suivi d’un ménage complet et le linge
              premium est renouvelé. Nous effectuons un contrôle qualité
              systématique et intervenons rapidement en cas de problème
              technique. Votre logement reste impeccable, prêt à accueillir de
              nouveaux voyageurs et à maintenir une excellente réputation en
              ligne.
            </>
          ),
        },
        {
          q: "Que se passe-t-il en cas d’urgence ou de problème technique ?",
          a: (
            <>
              Notre équipe est disponible 7j/7 pour gérer tout imprévu : fuite
              d’eau, panne d’équipement, problème électrique… Nous travaillons
              avec des partenaires locaux fiables (plombiers, électriciens,
              artisans) pour intervenir rapidement. L’objectif : garantir le
              confort des voyageurs, protéger votre logement et éviter toute
              perte de revenus.
            </>
          ),
        },
      ],
    },
    {
      key: "lancer",
      title: "Pour se lancer",
      items: [
        {
          q: "Quelles sont les étapes pour confier mon logement ?",
          a: (
            <>
              C’est simple et rapide :
              <ol>
                <li>Remplir notre formulaire ou réserver un appel.</li>
                <li>Réalisation d’un audit complet de votre logement.</li>
                <li>Shooting photo professionnel.</li>
                <li>
                  Rédaction d’une annonce optimisée pour Airbnb, Booking et
                  Abritel.
                </li>
                <li>Mise en ligne avec stratégie tarifaire adaptée.</li>
              </ol>
              <div className="faq-cta">
                <button className="btn-faq" onClick={handleFaqBtnClick}>
                  Découvrir nos étapes
                </button>
              </div>
            </>
          ),
        },
        {
          q: "Combien de temps faut-il pour commencer à louer ?",
          a: (
            <>
              Votre logement peut être mis en ligne sur Airbnb en moins de 24h
              après la séance photo et la rédaction de l’annonce. À Besançon
              comme à Villeurbanne, les premières réservations arrivent
              généralement très vite.
            </>
          ),
        },
        {
          q: "Puis-je changer facilement si je suis déjà avec une autre conciergerie ?",
          a: (
            <>
              Oui. Nous facilitons la transition : reprise des annonces,
              synchronisation des calendriers et continuité pour vos voyageurs.
              Vous bénéficiez rapidement d’une gestion optimisée et plus
              rentable sans perturbation.
            </>
          ),
        },
        {
          q: "Dois-je avancer des frais pour démarrer ?",
          a: (
            <>
              Non, aucun frais caché ni d’inscription. Nous travaillons 100% sur
              commission : 20% des revenus générés. Vos gains sont aussi nos
              revenus, ce qui nous motive à maximiser vos revenus locatifs.
            </>
          ),
        },
        {
          q: "Y a-t-il une durée minimum d’engagement ?",
          a: (
            <>
              Non, nous fonctionnons sans contrainte. Vous pouvez arrêter à tout
              moment en respectant le préavis prévu au contrat. Nous
              privilégions la satisfaction et la confiance plutôt que
              l’engagement forcé.
            </>
          ),
        },
      ],
    },
  ];

  const [activeKey, setActiveKey] = useState(sections[0].key);
  const current = sections.find((s) => s.key === activeKey);

  const toggle = (idx) => {
    setOpenIndexBySection((prev) => ({
      ...prev,
      [activeKey]: prev[activeKey] === idx ? null : idx,
    }));
  };

  const onTabClick = (key) => {
    setActiveKey(key);
    setOpenIndexBySection((prev) => ({ ...prev, [key]: null }));
  };

  return (
    <section id="faq-page">
      {/* ---------- HEADER FULL WIDTH ---------- */}
      <div className="intro-section">
        <img src={headerImg} alt="FAQ Alva Conciergerie" className="bg-img" />
        <div className="overlay">
          <h1>FAQ</h1>
          <p>
            Retrouvez les réponses aux questions les plus fréquentes sur la
            gestion de votre logement en location courte durée à Besançon et
            Villeurbanne.
          </p>
        </div>
      </div>

      {/* ---------- BODY : IMAGES + CONTENU ---------- */}
      <div className="faq-body">
        <div className="faq-images-wrapper">
          <div className="faq-images left">
            <img src={img1} alt="FAQ décor 1" />
            <img src={img2} alt="FAQ décor 2" />
            <img src={img3} alt="FAQ décor 3" />
          </div>
          <div className="faq-images right">
            <img src={img4} alt="FAQ décor 4" />
            <img src={img5} alt="FAQ décor 5" />
            <img src={img6} alt="FAQ décor 6" />
          </div>
        </div>

        <div className="faq-container">
          <h2>Questions fréquentes</h2>
          <p className="intro">
            Pour toute autre question, n’hésitez pas à{" "}
            <span
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              nous contacter{" "}
            </span>
          </p>

          <div className="faq-tabs" role="tablist" aria-label="Rubriques FAQ">
            {sections.map((sec) => (
              <button
                key={sec.key}
                role="tab"
                aria-selected={activeKey === sec.key}
                className={`faq-tab ${activeKey === sec.key ? "active" : ""}`}
                onClick={() => onTabClick(sec.key)}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {current.items.map((item, index) => {
            const isOpen = openIndexBySection[activeKey] === index;
            return (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggle(index)}
                  className={`faq-question ${isOpen ? "open" : ""}`}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="icon">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
