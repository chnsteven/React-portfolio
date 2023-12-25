import React from "react";
import readMoreIcon from "../assets/icons/read-more.svg";
import youtubeIcon from "../assets/icons/youtube.svg";
function Projects({ projects }) {
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
              {/* <p></p> */}
              <p>
                {project.frontMatter.title} {project.frontMatter.start_date}~
                {project.frontMatter.end_date}
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
