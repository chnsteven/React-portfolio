import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { projectIds } from "../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import ProjectPage from "../pages/ProjectPage";

function Header({ headerLinks }) {
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
    <Router>
      <nav className="container-fluid" id="navigation-bar">
        {headerLinks.map((headerLink, index) => (
          <Link
            to={headerLink.path}
            className="navigation-bar-link hover-text-shadow"
          >
            {headerLink.title}
          </Link>
        ))}
      </nav>
      <Routes>
        {headerLinks.map((link, index) =>
          link.title === "Projects" ? (
            <Route
              key={index}
              path={link.path}
              element={<link.component projects={projects} />}
            />
          ) : (
            <Route key={index} path={link.path} element={<link.component />} />
          )
        )}
        {projects.map((project, index) => (
          <Route
            key={index}
            path={`/projects/${project.frontMatter.title}`}
            element={<ProjectPage project={project} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default Header;
