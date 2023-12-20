import React from "react";
import DisplayProjects from "../components/DisplayProjects";
import NavigationMenu from "../components/NavigationMenu";

const projectIds = ["Verloren", "Cosmania", "InsightUBC", "Java Application"];
function Projects() {
  return (
    <div>
      Projects
      <NavigationMenu buttonNames={projectIds}/>
      <DisplayProjects projectIds={projectIds} />
    </div>
  );
}

export default Projects;
