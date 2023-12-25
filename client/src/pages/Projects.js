import React from "react";
// import DisplayProjects from "../components/DisplayProjects";
// import NavigationMenu from "../components/NavigationMenu";
// import ScrollToTopButton from "../components/ScrollToTopButton";
import { useState, useEffect } from "react";
import { projectIds } from "../utils/constants";
import axios from "axios";
function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const projectRequests = projectIds.map((projectId) =>
      axios.get(`http://localhost:3001/projects/${projectId}`)
    );
    const fetchProjects = async () => {
      try {
        const projectPromises = await Promise.all(projectRequests);
        const projectsData = projectPromises.map((project) => project.data);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [projectIds]);

  return (
    <div>
      <div className="project-dashboard-box-container">
        {projects.map((project, index) => (
          <div className="project-card hover-box-shadow">
            <div className="project-card-header">
              <img
                className="project-card-image"
                src={project.frontMatter.cover_image}
                alt={project.frontMatter.title}
              />
              <a
                className="project-card-link"
                key={index}
                href={`/projects/${project.frontMatter.title}`}
              ></a>
              <div className="project-card-content"></div>
            </div>
            <nav className="project-dashboard-action-container">
              <a
                className="project-action-description"
                href={`/projects/${project.frontMatter.title}`}
              >
                Read more
              </a>
              <a
                className="project-action-video"
                href={project.frontMatter.video}
                alt={project.frontMatter.video_excerpt}
              >
                Watch video
              </a>
            </nav>
          </div>
        ))}
        {/* <DisplayProjects projectIds={projectIds} /> */}
      </div>
      {/* <NavigationMenu buttonNames={projectIds} /> */}
      {/* <ScrollToTopButton /> */}
    </div>
  );
}

export default Projects;
