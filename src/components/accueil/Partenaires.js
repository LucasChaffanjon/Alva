import React from "react";
import "./styles/Partenaires.scss";
import booking from "../../assets/booking.png";
import airbnb from "../../assets/airbnb.png";
import expedia from "../../assets/expedia.png";
import holidu from "../../assets/holidu.png";
import travel from "../../assets/travel.png";
import vrbo from "../../assets/vrbo.png";

const logos = [
  { src: booking, alt: "Booking.com" },
  { src: airbnb, alt: "Travelstaytion" },
  { src: expedia, alt: "Holidu" },
  { src: holidu, alt: "Vrbo" },
  { src: travel, alt: "Expedia" },
  { src: vrbo, alt: "Airbnb" },
];

const Partenaires = () => {
  return (
    <section id="partners">
      <h3>NOS PARTENAIRES</h3>
      <div
        className="marquee"
        aria-label="Plateformes de réservation partenaires"
      >
        {/* On duplique la rangée pour un défilement infini */}
        <div className="track">
          {logos.concat(logos).map((l, i) => (
            <div className="logo" key={i}>
              <img src={l.src} alt={l.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partenaires;
