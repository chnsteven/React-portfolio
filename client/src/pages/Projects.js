import React from "react";
import DisplayProjects from "../components/DisplayProjects";

const projectIds = ["verloren", "cosmania", "insightUBC", "javaApp"];
function Projects() {
  return (
    <div>
      Projects
      <DisplayProjects projectIds={projectIds} />
    </div>
  );
}

export default Projects;
