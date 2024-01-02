import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const enterPortfolio = () => {
    navigate("/about");
  };
  return (
    <div className="homepage-container">
      <div className="homepage-background fade-in" />
      <article
        className="homepage-content fade-in">
        <blockquote>
          <p>
            Hello, I am Steven Chen. As a recent graduate from UBC with a passion for statistics and computer science,
            I bring a fresh perspective for turning ideas into innovative solutions.
            My diverse academic background,
            coupled with hands-on experience from school projects and self-driven initiatives,
            fuels my commitment to excel in the dynamic world of software development.
            Let's build something extraordinary together.
          </p>
        </blockquote>
        <button
          onClick={enterPortfolio}>
          Enter Portfolio
        </button>
      </article>
    </div>

  );
}

export default Home;
