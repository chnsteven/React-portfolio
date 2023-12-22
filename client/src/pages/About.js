import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { aboutContent } from "../utils/constants";
function About() {
  const convertMarkdownToHTML = (text) => {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic
    return text;
  };

  return (
    <div>
      <ScrollToTopButton />
      <div className="container">
        <h1 className="title">About</h1>
          <ul>
            {aboutContent.map((content, index) => (
              <li key={index}>
                <p key={index} dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(content) }} />
              </li>
            ))}
          </ul>
        {/* TODO: add skills */}
      </div>
    </div>
  );
}

export default About;
