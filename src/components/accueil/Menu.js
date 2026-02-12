import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/Menu.scss";

const Menu = () => {
  const [status, setStatus] = useState("");
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.openForm) {
      setShowForm(true);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScjPFohHI9_cBFABmrzrnUkTyROQAdWsTlK1Vq_BvL_YSLhGg/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    )
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => setStatus("error"));
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setShowForm(false);
    };
    if (showForm) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  // Fonction utilitaire pour générer les options de 1 à 10
  const renderNumberOptions = () => {
    return [...Array(10)].map((_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
  };

  return (
    <div id="menu">
      <div className="menu">
        {/* --- Desktop : Formulaire permanent --- */}
        <form className="formulaire desktop-only" onSubmit={handleSubmit}>
          <div>
            <label>Adresse du bien</label>
            <input type="text" name="entry.1261560012" required />
          </div>
          <div>
            <label>Ville</label>
            <input type="text" name="entry.1696718327" required />
          </div>
          <div>
            <label>Type de bien</label>
            <select name="entry.410455139" required defaultValue="">
              <option value="" disabled hidden>
                -- Sélectionnez --
              </option>
              <option>Studio</option>
              <option>T2</option>
              <option>T3</option>
              <option>T4</option>
              <option>Maison</option>
              <option>Autres</option>
            </select>
          </div>
          <div>
            <label>Nombre de chambres</label>
            <select name="entry.23772495" required defaultValue="">
              <option value="" disabled hidden>
                -- Sélectionnez --
              </option>
              {renderNumberOptions()}
            </select>
          </div>
          <div>
            <label>Nombre de salles de bains</label>
            <select name="entry.298792479" required defaultValue="">
              <option value="" disabled hidden>
                -- Sélectionnez --
              </option>
              {renderNumberOptions()}
            </select>
          </div>
          <div>
            <label>Adresse mail</label>
            <input type="email" name="entry.1127713591" required />
          </div>
          <div>
            <label>Numéro de téléphone</label>
            <input type="tel" name="entry.631556959" required />
          </div>

          <span>
            Obtenez gratuitement une estimation personnalisée de vos revenus
            Airbnb et découvrez comment maximiser la rentabilité de votre bien.
          </span>

          <button type="submit">Envoyer</button>

          {status === "success" && (
            <p className="success-message">
              Merci, votre formulaire a bien été envoyé !
            </p>
          )}
          {status === "error" && (
            <p className="error-message">Oups, une erreur est survenue…</p>
          )}
        </form>

        <div className="text">
          <h1>
            Alva Conciergerie, la gestion clé en main à Besançon et Villeurbanne
          </h1>
          <p>
            Confiez-nous votre bien, nous maximisons sa rentabilité en toute
            sérénité.
          </p>
          <button
            className="toggle-form mobile-only"
            onClick={() => setShowForm(true)}
          >
            Afficher le formulaire
          </button>
        </div>
      </div>

      {/* --- Mobile : MODALE --- */}
      {showForm && (
        <div className="form-modal mobile-only">
          <div className="modal-backdrop" onClick={() => setShowForm(false)} />
          <div className="modal-panel" role="dialog" aria-modal="true">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ×
            </button>

            <form className="form-mob" onSubmit={handleSubmit}>
              <div>
                <label>Adresse du bien</label>
                <input type="text" name="entry.1261560012" required />
              </div>
              <div>
                <label>Ville</label>
                <input type="text" name="entry.1696718327" required />
              </div>
              <div>
                <label>Type de bien</label>
                <select name="entry.410455139" required defaultValue="">
                  <option value="" disabled hidden>
                    -- Sélectionnez --
                  </option>
                  <option>Studio</option>
                  <option>T2</option>
                  <option>T3</option>
                  <option>T4</option>
                  <option>Maison</option>
                  <option>Autres</option>
                </select>
              </div>
              <div>
                <label>Nombre de chambres</label>
                <select name="entry.23772495" required defaultValue="">
                  <option value="" disabled hidden>
                    -- Sélectionnez --
                  </option>
                  {renderNumberOptions()}
                </select>
              </div>
              <div>
                <label>Nombre de salles de bains</label>
                <select name="entry.298792479" required defaultValue="">
                  <option value="" disabled hidden>
                    -- Sélectionnez --
                  </option>
                  {renderNumberOptions()}
                </select>
              </div>
              <div>
                <label>Adresse mail</label>
                <input type="email" name="entry.1127713591" required />
              </div>
              <div>
                <label>Numéro de téléphone</label>
                <input type="tel" name="entry.631556959" required />
              </div>

              <span>
                Obtenez gratuitement une estimation personnalisée de vos revenus
                Airbnb et découvrez comment maximiser la rentabilité de votre
                bien.
              </span>

              <button type="submit">Envoyer</button>

              {status === "success" && (
                <p className="success-message">
                  Merci, votre formulaire a bien été envoyé !
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
