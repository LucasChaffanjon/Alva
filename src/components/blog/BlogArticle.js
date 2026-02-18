import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Top from "../Top";
import Footer from "../Footer";
import blogData from "./blogData";
import "./styles/blogArticle.scss";

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const articles = blogData(navigate);
  const article = articles.find((a) => String(a.id) === String(id));

  if (!article) {
    return (
      <>
        <Top />
        <div className="article-not-found">
          <p>Article introuvable</p>
          <button onClick={() => navigate("/blog")}>Retour au blog</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Top />
      <main className="article-container">
        <header className="article-header">
          <p className="meta">
            {article.date} • {article.category}
          </p>
          <h1>{article.title}</h1>
        </header>

        <img src={article.image} alt={article.alt} className="main-image" />

        <div className="article-body-content">{article.content}</div>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticle;
