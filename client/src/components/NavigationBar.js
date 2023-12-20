import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

function NavigationBar({navigationLinks}) {
  return (
    <Router>
      {navigationLinks.map((link, index) => (
        <Link to={link.path}>{link.title}</Link>
      ))};
      <Routes>
        {navigationLinks.map((link, index) => (
          <Route key={index} path={link.path} element={<link.component />} />
        ))};
      </Routes>
    </Router>
  );
}

export default NavigationBar;
