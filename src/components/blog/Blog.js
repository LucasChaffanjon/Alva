import React, { useState, useMemo } from "react";
import "./styles/blog.scss";
import { useNavigate } from "react-router-dom";
import blogData from "./blogData";

import headerImg from "../../assets/blog.svg";

// MODIFICATION ICI : On ne définit plus "articles" ici car on a besoin de "navigate" qui est dans le composant
const CATEGORIES = [
  "Fiscalité",
  "Décoration",
  "Tendances",
  "Activités",
  "Optimisation des revenus",
];

const Blog = () => {
  const navigate = useNavigate();

  // MODIFICATION ICI : On génère le tableau d'articles en passant "navigate" à la fonction blogData
  const articles = useMemo(() => blogData(navigate), [navigate]);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null); // string ou null
  const [page, setPage] = useState(0); // pagination pour le slider (2 articles)
  const [activeArticle, setActiveArticle] = useState(null); // article complet (popup)

  const pageSize = 2;

  const filteredArticles = useMemo(() => {
    const q = search.trim().toLowerCase();

    // On utilise les articles générés plus haut
    let list = articles;

    // filtre catégorie
    if (activeCategory) {
      list = list.filter((a) => a.category === activeCategory);
    }

    // filtre recherche sur titre + excerpt
    if (q) {
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q)
      );
    }

    return list;
  }, [search, activeCategory, articles]); // Ajout de "articles" en dépendance

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));

  // s'assurer que la page est dans les bornes si le filtre change
  const currentPage = Math.min(page, totalPages - 1);
  const startIndex = currentPage * pageSize;

  // ICI : filteredArticles est maintenant un vrai tableau, slice() fonctionnera !
  const visibleArticles = filteredArticles.slice(
    startIndex,
    startIndex + pageSize
  );

  const goPrev = () => {
    setPage((p) => Math.max(0, p - 1));
  };

  const goNext = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
    setPage(0);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(0);
  };

  return (
    <section id="blog">
      {/* -------- HEADER FULL WIDTH -------- */}
      <div className="blog-header">
        <img
          src={headerImg}
          alt="Le blog d'Alva Conciergerie"
          className="bg-img"
        />

        <div className="overlay">
          <h1>Blog</h1>
          <h2>Conseils Airbnb à Besançon &amp; Villeurbanne</h2>

          <p className="blog-intro">
            Découvrez nos conseils pour optimiser vos locations courtes durées :
            réglementation, fiscalité, rentabilité, quartiers, stratégies de
            prix et bonnes pratiques pour offrir une expérience 5★ à vos
            voyageurs.
          </p>
        </div>
      </div>

      <div className="blog-intro-mobile">
        Découvrez nos conseils pour optimiser vos locations courtes durées :
        réglementation, fiscalité, rentabilité, quartiers, stratégies de prix et
        bonnes pratiques pour offrir une expérience 5★ à vos voyageurs.
      </div>

      {/* -------- CONTENU PRINCIPAL -------- */}
      <div className="blog-page">
        <aside className="sidebar">
          <div className="about-box">
            <p>
              Alva Conciergerie vous partage des contenus experts pour améliorer
              vos revenus et gérer votre logement Airbnb en toute sérénité.
            </p>
          </div>

          <div className="search-box">
            <h3>Rechercher</h3>
            <div className="search-input">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              <button>OK</button>
            </div>
          </div>

          <div className="categories">
            <h3>Catégories</h3>
            <ul>
              {CATEGORIES.map((cat) => (
                <li
                  key={cat}
                  className={activeCategory === cat ? "active" : ""}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
            {activeCategory && (
              <button
                className="reset-filters"
                onClick={() => setActiveCategory(null)}
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </aside>

        <div className="content">
          <div className="articles-grid">
            {visibleArticles.length === 0 ? (
              <p className="no-results">
                Aucun article ne correspond à votre recherche.
              </p>
            ) : (
              visibleArticles.map((a) => (
                <div className="article-card" key={a.id}>
                  <img src={a.image} alt={a.alt} />
                  <div className="article-content">
                    <span className="chip">{a.category}</span>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <div className="meta">
                      <span>{a.date}</span>
                    </div>
                    <button
                      onClick={() => {
                        navigate(`/blog/${a.id}`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Lire la suite →
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {filteredArticles.length > pageSize && (
            <div className="slider-controls">
              <button
                onClick={goPrev}
                disabled={currentPage === 0}
                className="nav-btn"
              >
                ← Précédent
              </button>
              <span className="pagination">
                Page {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={goNext}
                disabled={currentPage === totalPages - 1}
                className="nav-btn"
              >
                Suivant →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* -------- POPUP ARTICLE COMPLET -------- */}
      {activeArticle && (
        <div className="article-modal">
          <div
            className="modal-backdrop"
            onClick={() => setActiveArticle(null)}
          />
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() => setActiveArticle(null)}
              aria-label="Fermer l’article"
            >
              ×
            </button>
            <div className="modal-header">
              <span className="chip">{activeArticle.category}</span>
              <h2>{activeArticle.title}</h2>
              <p className="modal-meta">{activeArticle.date}</p>
            </div>
            <div className="modal-body">{activeArticle.content}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
