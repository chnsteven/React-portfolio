
import "./utils/css/projectDashboard.css";
import "./utils/css/education.css";
import "./utils/css/popup.css";
import "./utils/css/animations.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { projectIds, headerLinks } from "./utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import ProjectPage from "./pages/ProjectPage";

function App() {
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3001/education")
      .then((response) => {
        // console.log("Education API response:", response.data);
        setEducation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching education:", error);
      });
  }, []);
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
  }, []);

  return (
    <div className="body">
      <Router>
        <Routes>
          {projects.map((project) =>
          (project && (
            <Route
              // key={project.frontMatter.title}  // Don't forget to add a unique key
              path={"/projects/" + project.frontMatter.title}
              element={<ProjectPage project={project} />}
            />
          )
          ))}
          {headerLinks.map((link, index) => {
            if (link.title === "Projects") {
              return (
                <Route
                  key={index}
                  path={link.path}
                  element={<link.component projects={projects} />}
                />
              );
            } else if (link.title === "Education") {
              return (
                <Route
                  key={index}
                  path={link.path}
                  element={<link.component education={education} />}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  path={link.path}
                  element={<link.component />}
                />
              );
            }
          })}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
