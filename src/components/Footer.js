import React from "react";
import "./styles/footer.scss";
import logo from "../assets/logowhite.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li
              onClick={() => {
                navigate("/service");
                window.scrollTo(0, 0);
              }}
            >
              Nos services
            </li>
            <li
              onClick={() => {
                const section = document.getElementById("tarifs-cont");
                section?.scrollIntoView({ behavior: "smooth" });
                navigate("/");
              }}
            >
              Nos tarifs
            </li>
            <li
              onClick={() => {
                const isMobile = window.innerWidth <= 1024;
                navigate("/", { state: { openForm: isMobile } });
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" });

                if (!isMobile) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Calculer vos revenus
            </li>
          </ul>
        </div>

        {/* Entreprise */}
        <div className="footer-col">
          <h3>Entreprise</h3>
          <ul>
            <li
              onClick={() => {
                const section = document.getElementById("satisfaction");
                section?.scrollIntoView({ behavior: "smooth" });
                navigate("/");
              }}
            >
              Nos secteurs
            </li>
            <li
              onClick={() => {
                navigate("/blog");
                window.scrollTo(0, 0);
              }}
            >
              Blog
            </li>
          </ul>
        </div>

        {/* Plus */}
        <div className="footer-col">
          <h3>Plus</h3>
          <ul>
            <li
              onClick={() => {
                navigate("/faq");
                window.scrollTo(0, 0);
              }}
            >
              FAQ
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              Contactez-nous
            </li>
            <li
              onClick={() => {
                navigate("/mentionsleg");
                window.scrollTo(0, 0);
              }}
            >
              Mentions légales
            </li>
            <li
              onClick={() => {
                navigate("/politique");
                window.scrollTo(0, 0);
              }}
            >
              Protection des données
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            Villeurbanne <a href="tel:+336 52 38 69 95">06 52 38 69 95</a>
          </p>
          <p>
            Besançon <a href="tel:+337 61 72 59 15">07 61 72 59 15</a>
          </p>
          <p>
            <a href="mailto:alvaconciergerie@gmail.com">
              alvaconciergerie@gmail.com
            </a>
          </p>
          <div className="socials">
            <a href="https://www.linkedin.com/company/alva-conciergerie/about/">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/alvaconciergerie/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
