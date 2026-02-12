import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Top from "./components/Top";
import Menu from "./components/accueil/Menu";
import Partenaires from "./components/accueil/Partenaires";
import Secteurs from "./components/accueil/Secteurs";
import Faq from "./components/faq/Faq";
import Avantages from "./components/accueil/Avantages";
import Chiffres from "./components/accueil/Chiffres";
import Process from "./components/Process";
import Tarifs from "./components/Tarifs";
import Exemple from "./components/Exemple";
import Guide from "./components/Guide";
import Avis from "./components/accueil/Avis";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Services from "./components//services/Services";

import "./index.scss";
import Blog from "./components/blog/Blog";
import BlogArticle from "./components/blog/BlogArticle";
import DevenirPartenaire from "./components/partenaire/DevenirPartenaire";
import Besancon from "./components/Secteurs/Besancon";
import Villeurbanne from "./components/Secteurs/Villeurbanne";
import MentionsLegales from "./components/legal/MentionsLegales.js";
import Politique from "./components/legal/Politique";

// page principale
const Home = () => (
  <>
    <Top />
    <Menu />
    <Avantages />
    <Chiffres />
    <Process />
    <Tarifs />
    <Exemple />
    <Guide />
    <Secteurs />
    <Avis />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={
            <>
              <Top />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/devenir-partenaire"
          element={
            <>
              <Top />
              <DevenirPartenaire />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <Top />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Top />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <Top />
              <Faq />
              <Footer />
            </>
          }
        />
        <Route
          path="/besancon"
          element={
            <>
              <Top />
              <Besancon />
              <Footer />
            </>
          }
        />
        <Route
          path="/villeurbanne"
          element={
            <>
              <Top />
              <Villeurbanne />
              <Footer />
            </>
          }
        />
        <Route
          path="/mentionsleg"
          element={
            <>
              <Top />
              <MentionsLegales />
              <Footer />
            </>
          }
        />
        <Route
          path="/politique"
          element={
            <>
              <Top />
              <Politique />
              <Footer />
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
