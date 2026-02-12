import React, { useRef, useState } from "react";
import "./styles/avis.scss";
import guillemets from "../../assets/guillemets.png";

const Avis = () => {
  const testimonials = [
    {
      text: "Ils s’occupent de tout : la création d’annonce Airbnb et Booking, la communication avec les voyageurs, le ménage… Je n’ai plus à me soucier de rien. Grâce à la gestion locative d’Alva Conciergerie, mes revenus en location courte durée ont nettement augmenté.",
      author: "Martin J",
      city: "Villeurbanne",
    },
    {
      text: "C’est un vrai plaisir de collaborer avec Alva Conciergerie. En tant que propriétaire à Besançon, je gagne du temps et j’ai une vraie tranquillité d’esprit. Mon logement est parfaitement géré sur Airbnb et Booking.",
      author: "Sophie M",
      city: "Besançon",
    },
    {
      text: "Une conciergerie professionnelle avec des résultats visibles dès les premiers mois. Mes locations Airbnb à Villeurbanne affichent un meilleur taux d’occupation et de meilleurs avis voyageurs. Je recommande vivement Alva Conciergerie pour toute gestion en location courte durée.",
      author: "Hervé L",
      city: "Villeurbanne",
    },
    {
      text: "Grâce à Alva Conciergerie, mon studio Airbnb à Besançon est toujours impeccable. Les voyageurs laissent d’excellents avis, mon taux d’occupation a augmenté et mes revenus locatifs aussi. Une gestion Airbnb efficace et sans stress !",
      author: "Manon R",
      city: "Besançon",
    },
    {
      text: "Je n’ai plus aucun stress depuis qu’Alva Conciergerie gère mes réservations Airbnb. Ils veillent à chaque détail : accueil, ménage, linge. Depuis, mes voyageurs laissent de meilleurs commentaires et mes revenus en location courte durée à Villeurbanne ne cessent d’augmenter.",
      author: "Sophie A",
      city: "Villeurbanne",
    },
  ];

  const scrollRef = useRef();
  const [showLeft, setShowLeft] = useState(false);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    setShowLeft(scrollLeft > 20);
  };

  const scrollRight = () => {
    // On décale d'une largeur de carte + le gap (approx 344px)
    // Le scroll-snap CSS fera le reste pour recadrer pile poil
    scrollRef.current.scrollBy({ left: 344, behavior: "smooth" });
  };

  const scrollLeftClick = () => {
    scrollRef.current.scrollBy({ left: -344, behavior: "smooth" });
  };

  return (
    <section className="Avis">
      <header className="avis-header">
        <h2>Témoignages clients</h2>
        <p>
          Ils nous ont fait confiance pour la gestion complète de leurs
          locations Airbnb et Booking à Besançon et Villeurbanne. Découvrez
          leurs expériences en location courte durée avec Alva Conciergerie.
        </p>
      </header>

      <div className="avis-container">
        {showLeft && (
          <button className="scroll-btn left" onClick={scrollLeftClick}>
            ←
          </button>
        )}

        <div className="avis-scroll" ref={scrollRef} onScroll={handleScroll}>
          {testimonials.map((t, index) => (
            <div key={index} className="avis-card">
              <img src={guillemets} alt="guillemets" className="quote-icon" />

              <div className="stars">★★★★★</div>
              <p className="text">“{t.text}”</p>
              <p className="author">
                — {t.author}, {t.city}
              </p>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          →
        </button>
      </div>

      <div className="cta">
        <p>
          👉 Vous souhaitez augmenter vos revenus Airbnb ou Booking à Besançon
          ou Villeurbanne ?
        </p>
        <a
          href="#contact"
          className="btn"
          onClick={() =>
            window.open(
              "https://calendly.com/alvaconciergerie/30min?lid=ygjvde2x51fh&utm_medium=email&utm_source=braze&utm_campaign=2024Q4-NUR-TRIAL-ONB-ALL_ROLES-EN-Pers_Core_Onboarding&utm_content=user_url_text&back=1&month=2025-12",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          📞 Réserver un appel
        </a>
      </div>
    </section>
  );
};

export default Avis;
