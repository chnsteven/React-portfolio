import React from "react";
import { Link } from "react-router-dom";
import { headerLinks } from "../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";

function Header() {
  return (
    <nav className="container-fluid" id="navigation-bar">
      {headerLinks.map((headerLink) => (
        headerLink.title !== "Home" && (
          <Link
            to={headerLink.path}
            className="navigation-bar-link hover-text-shadow"
          >
            {headerLink.title}
          </Link>)

      ))}
    </nav>

  );
}

export default Header;
