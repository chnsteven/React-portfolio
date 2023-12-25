import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { projectIds } from "../utils/constants";
function Header({ headerLinks }) {
  return (
    <Router>
      <div className="container-fluid" id="navigation-bar">
        {headerLinks.map((headerLink, index) => (
          <Link
            to={headerLink.path}
            className="navigation-bar-link hover-text-shadow"
          >
            {headerLink.title}
          </Link>
        ))}
      </div>
      <Routes>
        {headerLinks.map((link, index) => (
          <Route key={index} path={link.path} element={<link.component />} />
        ))}
        {projectIds.map((projectId, index) => (
          <Route
            key={index}
            path={`/projects/${projectId}`}
            element={<div>{projectId}</div>}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default Header;
