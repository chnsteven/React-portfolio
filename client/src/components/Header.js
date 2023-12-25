import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

function Header({ navigationLinks }) {
  return (
    <Router>
      <div className="container-fluid" id="navigation-bar">
        {navigationLinks.map((link, index) => (
          <Link
            to={link.path}
            className="navigation-bar-link hover-text-shadow"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <Routes>
        {navigationLinks.map((link, index) => (
          <Route key={index} path={link.path} element={<link.component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default Header;
