import React, { useEffect, useRef, useState } from "react";
import "./styles/secteurs.scss";
import ping from "../../assets/ping.png";
import { useNavigate } from "react-router-dom";

const Satisfaction = () => {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="satisfaction">
      <h1>Nos secteurs</h1>
      <p>
        Nos équipes locales, basées à Besançon et Villeurbanne, connaissent
        parfaitement le marché et les attentes des voyageurs. Cette proximité
        fait toute la différence.
      </p>
      <div className="satisfaction-cont">
        <ul ref={listRef} className={`villes-cont ${visible ? "visible" : ""}`}>
          <li
            className="ville-card"
            id="ville-card-Besançon"
            onClick={() => {
              navigate("/besancon");
              window.scrollTo(0, 0);
            }}
          >
            <div className="flex-infos">
              <span className="ping-cont">
                <img className="ping" src={ping} alt="ping" />
              </span>
              <span className="name-cont">Besançon</span>
            </div>
          </li>
          <li
            className="ville-card"
            id="ville-card-Villeurbanne"
            onClick={() => {
              navigate("/villeurbanne");
              window.scrollTo(0, 0);
            }}
          >
            <div className="flex-infos">
              <span className="ping-cont">
                <img className="ping" src={ping} alt="ping" />
              </span>
              <span className="name-cont">Villeurbanne</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Satisfaction;
