import React, { useState } from "react";
import "./styles/Guidepopup.scss";

const GuidePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeBLY0ohIbRpvUfhjDIPwk3gNR-zNSMHYJPwoIvxh08BzpRLw/formResponse";

    const data = new FormData();
    data.append("entry.1063672535", formData.prenom);
    data.append("entry.1459049136", formData.nom);
    data.append("entry.1635297394", formData.email);
    data.append("entry.4084496", formData.tel);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setStatus("success");
      setTimeout(() => {
        onClose();
        setFormData({ nom: "", prenom: "", email: "", tel: "" });
        setStatus("idle");
      }, 3500);
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="guide-modal-overlay">
      <div className="guide-modal-content">
        <button className="close-icon" onClick={onClose}>
          &times;
        </button>

        {status === "success" ? (
          <div className="success-state">
            <div className="icon">📩</div>
            <h2>C'est dans votre boîte !</h2>
            <p>
              Le guide vous sera envoyé à l'adresse{" "}
              <strong>{formData.email}</strong>.
            </p>
            <p className="note">Pensez à vérifier vos spams.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Recevoir le Guide 2026</h2>
              <p>
                Le guide complet de la location courte durée envoyé par mail.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Prénom"
                  required
                  value={formData.prenom}
                  onChange={(e) =>
                    setFormData({ ...formData, prenom: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  value={formData.nom}
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                />
              </div>
              <input
                type="email"
                placeholder="Votre adresse email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Téléphone (ex: 06...)"
                required
                value={formData.tel}
                onChange={(e) =>
                  setFormData({ ...formData, tel: e.target.value })
                }
              />

              <button type="submit" disabled={status === "loading"}>
                {status === "loading"
                  ? "Envoi en cours..."
                  : "Recevoir mon guide par email"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default GuidePopup;
