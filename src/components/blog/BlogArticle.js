import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Top from "../Top";
import Footer from "../Footer";
import blogData from "./blogData";

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = blogData.find((a) => String(a.id) === String(id));

  if (!article) {
    return (
      <>
        <Top />
        <div style={{ marginTop: 130, padding: "2rem", textAlign: "center" }}>
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
      <main style={{ marginTop: 80, padding: "2rem 10%" }}>
        <h1>{article.title}</h1>
        <p>
          {article.date} • {article.category}
        </p>
        <img
          src={article.image}
          alt={article.alt}
          style={{
            width: "100%",
            maxHeight: 380,
            objectFit: "cover",
            borderRadius: 12,
            margin: "1rem 0",
          }}
        />
        <div>{article.content}</div>
      </main>
      <Footer />
    </>
  );
};

export default BlogArticle;
