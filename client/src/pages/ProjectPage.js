import Markdown from "react-markdown";
import React, { useEffect, useState } from "react";
import arrowLeftIcon from "../assets/icons/arrow-left.svg";
const convertMarkdownToHTML = (text) => {
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Bold
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>"); // Italic
  return text;
};
function ProjectPage({ project }) {
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {
    let keywordArray = [];
    // Render each item in the array with dangerouslySetInnerHTML
    project.frontMatter.features.forEach((content) => {
      const container = document.createElement("div");
      container.innerHTML = convertMarkdownToHTML(content);

      // Use Array.from to convert NodeList to an array and then map to extract text content
      const keyword = Array.from(container.querySelectorAll("strong")).map(
        (strongTag) => strongTag.textContent
      );

      // Join the strongTexts array into a sentence with commas
      keywordArray.push(keyword.join(", "));
    });
    setKeywords(keywordArray);
  }, []);

  return (
    <div>
      <button className="return-to-projects-button"
        onClick={() => window.location.href = "/projects"} >
        <img
          className="icon"
          src={arrowLeftIcon}
          alt="arrow left icon" />
        Return to project page </button>
      <div>
        <h1 className="title">
          <Markdown>{project.frontMatter.title}</Markdown>
        </h1>
      </div>
      {project.frontMatter.overview && (
        <div>
          <h1 className="sub-title">
            Overview
          </h1>
          <ul>
            <li className="left-align">
              <Markdown>{project.frontMatter.overview}</Markdown>
            </li>
          </ul>

        </div>
      )}
      {project.frontMatter.features && (
        <div>
          <h1 className="sub-title">
            Features
          </h1>
          <ul className="left-align">
            {project.frontMatter.features.map((feature, index) => (
              <li key={index}>
                <Markdown>{feature}</Markdown>
              </li>
            ))}
          </ul>
        </div>
      )}
      {keywords.length > 0 && (
        <div>
          <h1 className="sub-title">Keywords</h1>
          <ul className="left-align">
            {keywords.map((keyword, index) => (
              (keyword !== "" && (
                <li key={index}>{keyword}</li>
              ))
            ))}
          </ul>
        </div>
      )}



    </div>
  );
}

export default ProjectPage;
