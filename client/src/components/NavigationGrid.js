import React from 'react'
import { Link } from 'react-router-dom'
import {navigationLinks} from "../utils/constants";

function NavigationGrid() {
  const buttonsPerRow = 3;
  return (
    <div className='container'>
      {chunk(navigationLinks, buttonsPerRow).map((buttonGroup, index) => (
        <div className='row' key = {index}>
          {buttonGroup.map((link, index) => (
            <div className='col-md-4' key={index}>
              <Link key={index} to={link.path}>
                <button type='button' className='btn btn-primary'>{link.title}</button>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default NavigationGrid;

function chunk(array, size) {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, (index + 1) * size)
  );
}