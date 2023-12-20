import React from "react";
import DisplayProjects from "../components/DisplayProjects";
import NavigationMenu from "../components/NavigationMenu";
import ScrollToTopButton from "../components/ScrollToTopButton";

const projectIds = ["Verloren", "Cosmania", "InsightUBC", "Java Application"];
function Projects() {
  return (
    <div>
      Working on more...
      <NavigationMenu buttonNames={projectIds}/>
      <DisplayProjects projectIds={projectIds} />
      <ScrollToTopButton />
    </div>
  );
}

export default Projects;
