import React from "react";
// import DisplayProjects from "../components/DisplayProjects";
import NavigationMenu from "../components/NavigationMenu";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { projectIds } from "../utils/constants";
function Projects() {
  return (
    <div>
      <div className="project-card-box-container">
        {projectIds.map((projectId, index) => (
          <div className="project-card hover-box-shadow">
            <div className="project-card-header">
              <h1>{projectId}</h1>
              <img className="project-card-image" src="" alt={projectId} />
              <a
                className="project-card-link"
                key={index}
                href={`/projects/${projectId}`}
              >
                {projectId}
              </a>
              <div className="project-card-content"></div>
            </div>

            <nav className="project-action-container">
              <a
                className="project-action-detail"
                href={`/projects/${projectId}`}
              >
                Check detail
              </a>
              <a
                className="project-action-video"
                href={`/projects/${projectId}`}
              >
                Watch video
              </a>
            </nav>
          </div>
        ))}
        {/* <DisplayProjects projectIds={projectIds} /> */}
      </div>
      <NavigationMenu buttonNames={projectIds} />
      <ScrollToTopButton />
    </div>
  );
}

export default Projects;
