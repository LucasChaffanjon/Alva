import React, { useState } from "react";
import "./styles/guide.scss";
import guide from "../assets/guide.svg";
import GuidePopup from "./GuidePopup";

const Guide = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="guide-cont">
      <h1>Guide location courte durée</h1>
      <div className="flex-guide">
        <img className="guide-img" src={guide} alt="guide-img" />
        <div className="guide-infos">
          <p>
            Téléchargez gratuitement notre guide dédié à la gestion de locations
            courte durée sur Airbnb. Que vous soyez débutant ou professionnel,
            ce guide vous révèle des stratégies essentielles pour maximiser vos
            revenus, optimiser votre temps et offrir une expérience 5 étoiles à
            vos invités. Cliquez sur le bouton ci-dessous pour le télécharger et
            améliorer vos locations dès aujourd'hui !
          </p>
          <button className="btn-download" onClick={() => setIsPopupOpen(true)}>
            Télécharger le guide
          </button>
          <GuidePopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Guide;
