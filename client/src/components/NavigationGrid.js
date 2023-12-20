import React from 'react'
import { Link } from 'react-router-dom'
import {navigationLinks} from "../utils/constants";

function NavigationGrid() {
  return (
    <div>
      {navigationLinks.map((link, index) => (
        <Link key={index} to={link.path}>
        <button>{link.title}</button>
      </Link>
    ))};
    </div>
  )
}

export default NavigationGrid
