import React from 'react'

function NavigationMenu() {

    const scrollToYear = year => {
        const element = document.getElementById(`year-${year}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div>
    <h2>Navigation</h2>
    <ul>
        <li key={`nav-${project.frontMatter.start_date}`}>
          <button onClick={() => scrollToYear(2023)}>
            2023
          </button>
        </li>
    </ul>
  </div>
  )
}

export default NavigationMenu
