import React from "react";
import { useState, useEffect } from "react";
import { projectIds } from "../utils/constants";
import axios from "axios";
import readMoreIcon from "../assets/icons/read-more.svg";
import youtubeIcon from "../assets/icons/youtube.svg";
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
            </div>
            <div className="project-card-content">
              <p>
                {project.frontMatter.start_date}~{project.frontMatter.end_date}
              </p>
            </div>
            <nav className="project-dashboard-action-container">
              <a
                className="project-action"
                href={`/projects/${project.frontMatter.title}`}
                title="Read more"
              >
                <img
                  className="project-action-icon hover-box-shadow"
                  src={readMoreIcon}
                  alt="read more icon"
                />
              </a>
              <a
                className="project-action"
                href={project.frontMatter.video}
                alt={project.frontMatter.video_excerpt}
                title="Watch video"
                target="_blank"
              >
                <img
                  className="project-action-icon hover-box-shadow"
                  src={youtubeIcon}
                  alt="youtube icon"
                />
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
