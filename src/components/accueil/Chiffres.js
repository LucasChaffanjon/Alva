import React, { useEffect, useRef, useState } from "react";
import "./styles/chiffres.scss";

const Chiffres = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Nouvel état pour bloquer l'animation
  const [visible, setVisible] = useState(false);
  const chiffresRef = useRef(null);
  const [values, setValues] = useState([0, 0, 0]);

  const targets = [83, 35, 98];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // On ne déclenche "visible" que si l'animation n'a pas encore eu lieu
        if (entry.isIntersecting && !hasAnimated) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (chiffresRef.current) observer.observe(chiffresRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]); // On ré-observe si besoin, mais hasAnimated bloquera le trigger

  useEffect(() => {
    let interval;

    if (visible && !hasAnimated) {
      interval = setInterval(() => {
        setValues((prev) => {
          const newValues = prev.map((val, i) =>
            val < targets[i] ? Math.min(val + 1, targets[i]) : val
          );

          // Si toutes les valeurs ont atteint leurs cibles, on fixe l'état final
          if (newValues.every((val, i) => val === targets[i])) {
            setHasAnimated(true);
            clearInterval(interval);
          }
          return newValues;
        });
      }, 15);
    }

    return () => clearInterval(interval);
  }, [visible, hasAnimated]);

  return (
    <div className="chiffres-cont" ref={chiffresRef}>
      <h1 className="title">
        Nos résultats en gestion de locations courte durée à Besançon et
        Villeurbanne
      </h1>
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
