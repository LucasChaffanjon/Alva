import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Top.scss";
import logo from "../assets/logo.png";

function Top() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Mobile states
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const lastY = React.useRef(window.scrollY);
  const ignoreFirstScroll = React.useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      if (menuOpen) {
        if (ignoreFirstScroll.current) {
          ignoreFirstScroll.current = false;
        } else if (y !== lastY.current) {
          setMenuOpen(false);
          setSectorsOpen(false);
        }
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const goTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMenuOpen(false);
    setSectorsOpen(false);
  };

  return (
    <div className={`top ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo" onClick={() => goTo("/")} />
      </div>

      <ul className="nav-desktop">
        <li onClick={() => goTo("/")}>Accueil</li>
        <li onClick={() => goTo("/service")}>Nos services</li>
        <li className="dropdown">
          Nos secteurs
          <ul className="dropdown-content">
            <li onClick={() => goTo("/besancon")}>Besançon</li>
            <li onClick={() => goTo("/villeurbanne")}>Villeurbanne</li>
          </ul>
        </li>
        <li onClick={() => goTo("/faq")}>FAQ</li>
        <li onClick={() => goTo("/devenir-partenaire")}>Devenir partenaire</li>
        <li onClick={() => goTo("/blog")}>Blog</li>
      </ul>

      <button className="contact" onClick={() => goTo("/contact")}>
        Nous contacter
      </button>

      <button
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => {
          ignoreFirstScroll.current = true;
          setMenuOpen((v) => !v);
        }}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => goTo("/")}>Accueil</li>
          <span className="separator"></span>
          <li onClick={() => goTo("/service")}>Nos services</li>
          <span className="separator"></span>

          <li
            className={`mobile-dropdown ${sectorsOpen ? "open" : ""}`}
            onClick={() => setSectorsOpen((v) => !v)}
          >
            <div className="mobile-dropdown-title">
              Nos secteurs <span className="chev">▾</span>
            </div>
            <ul
              className="mobile-dropdown-content"
              onClick={(e) => e.stopPropagation()}
            >
              <li onClick={() => goTo("/besancon")}>Besançon</li>
              <li onClick={() => goTo("/villeurbanne")}>Villeurbanne</li>
            </ul>
          </li>

          <span className="separator"></span>
          <li onClick={() => goTo("/faq")}>FAQ</li>
          <span className="separator"></span>
          <li onClick={() => goTo("/devenir-partenaire")}>
            Devenir partenaire
          </li>
          <span className="separator"></span>
          <li onClick={() => goTo("/blog")}>Blog</li>
          <span className="separator"></span>

          <li className="mobile-contact">
            <button onClick={() => goTo("/contact")}>Nous contacter</button>
          </li>
        </ul>
      </div>

      <div
        className={`nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => {
          setMenuOpen(false);
          setSectorsOpen(false);
        }}
      />
    </div>
  );
}

export default Top;
