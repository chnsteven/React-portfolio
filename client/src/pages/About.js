import React, { useEffect, useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { aboutContent } from "../utils/constants";
const convertMarkdownToHTML = (text) => {
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Bold
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italic
  return text;
};
function About() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    let skillsArray = [];
    // Render each item in the array with dangerouslySetInnerHTML
    aboutContent.forEach((content) => {
      const container = document.createElement("div");
      container.innerHTML = convertMarkdownToHTML(content);

      // Use Array.from to convert NodeList to an array and then map to extract text content
      const skillText = Array.from(container.querySelectorAll("strong")).map(
        (strongTag) => strongTag.textContent
      );

      // Join the strongTexts array into a sentence with commas
      skillsArray.push(skillText.join(", "));
    });
    setSkills(skillsArray);
  }, []);

  return (
    <div>
      <ScrollToTopButton />
      <div className="container">
        <h1 className="title">About</h1>
        <ul className="about-page-list">
          {aboutContent.map((content, index) => (
            <li key={index}>
              <p
                key={index}
                dangerouslySetInnerHTML={{
                  __html: convertMarkdownToHTML(content),
                }}
              />
            </li>
          ))}
        </ul>
        {/* TODO: add skills */}
        <h1 className="title">Skills</h1>
        <ul className="about-page-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
