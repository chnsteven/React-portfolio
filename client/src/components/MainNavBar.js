import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

function MainNavBar() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Projects">Projects</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default MainNavBar;
