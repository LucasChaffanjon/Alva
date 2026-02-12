import React from "react";
import "./styles/guide.scss";
import guide from "../assets/guide.svg";
import Guidea from "../assets/AlvaGuidePdf.pdf";

const Guide = () => {
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
          <a
            href={Guidea}
            download="Guide-Location-Airbnb.pdf"
            className="guide"
          >
            Télécharger le guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default Guide;
