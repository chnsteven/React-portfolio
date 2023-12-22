import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
function About() {
  return (
    <div className="container">
      <ScrollToTopButton />
      <h1>About</h1>
      <div>
        <ul>
          <li>
            Proficient in programming languages such as C/C++, Java, JS/TS,
            Python, and R.
          </li>
          <li>
            Experience with frameworks such as Node.js, Next.js, and Three.js.
          </li>
          <li>Experience with Test-driven developments, OOP, ECS.</li>
          <li>Experience with version control with git.</li>
          <li>Participated in a simulated Agile work environment.</li>
          <li>
            Understand design principles, design patterns, data structures and
            algorithms.
          </li>
          <li>
            Understand Intelligent system, computer graphics, and computer
            animations.
          </li>
          {/* TODO: add skills */}
          <li>
            TODO: add skills
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
