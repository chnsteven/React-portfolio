import React from "react";
import Markdown from "../components/Markdown";

const verloren = "/projects/Verloren.md";
const cosmania = "/projects/Cosmania.md";
const insightUBC = "/projects/InsightUBC.md";
const javaApp = "/projects/JavaApp.md";

function Projects() {
  return (
    <div>
      Projects
      <Markdown projects={[verloren, cosmania, insightUBC, javaApp]} />
    </div>
  );
}

export default Projects;
