import React from "react";
import "./styles/tarifs.scss";
import image from "../assets/tarif.svg";
import { useNavigate } from "react-router-dom";

const Tarifs = () => {
  const navigate = useNavigate();
  return (
    <div id="tarifs-cont">
      <img className="img" src={image} alt="img" />
      <div className="infos">
        <p className="a">
          Confiez-nous la gestion de votre location courte durée et profitez
          d'un service professionnel complet, sans aucun frais d'inscription ni
          coûts cachés.
        </p>
        <p className="b">
          Commission unique : 20 % des revenus générés <br />
          <span>
            Aucun frais caché. Aucune inscription. Aucun engagement minimum.
          </span>
        </p>

        <p className="d">
          👉 Appelez-nous dès aujourd’hui et découvrez comment augmenter vos
          revenus sans effort.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
            window.scrollTo(0, 0);
          }}
        >
          Contactez-nous
        </button>
      </div>
    </div>
  );
};

export default Tarifs;
