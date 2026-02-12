import React, { useEffect, useRef, useState } from "react";
import "./styles/chiffres.scss";

const Chiffres = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visible, setVisible] = useState(false);
  const chiffresRef = useRef(null);
  const [values, setValues] = useState([0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (chiffresRef.current) observer.observe(chiffresRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    // Définition des cibles à l'intérieur du hook pour éviter les erreurs de dépendances
    const targets = [83, 35, 98];
    let interval;

    if (visible && !hasAnimated) {
      interval = setInterval(() => {
        setValues((prev) => {
          const newValues = prev.map((val, i) =>
            val < targets[i] ? Math.min(val + 1, targets[i]) : val
          );

          if (newValues.every((val, i) => val === targets[i])) {
            setHasAnimated(true);
            clearInterval(interval);
          }
          return newValues;
        });
      }, 15);
    }

    return () => clearInterval(interval);
  }, [visible, hasAnimated]); // targets n'est plus nécessaire ici

  return (
    <div className="chiffres-cont" ref={chiffresRef}>
      <h2 className="title">
        Nos résultats en gestion de locations courte durée à Besançon et
        Villeurbanne
      </h2>
      <ul>
        <li>
          <h1>{values[0]}%</h1>
          <p>Taux d'occupation moyen de nos locations meublées</p>
        </li>
        <li>
          <h1>+{values[1]}%</h1>
          <p>Revenus générés supplémentaires vs gestion classique</p>
        </li>
        <li>
          <h1>{values[2]}%</h1>
          <p>Propriétaires satisfaits de notre service de conciergerie</p>
        </li>
      </ul>
    </div>
  );
};

export default Chiffres;
