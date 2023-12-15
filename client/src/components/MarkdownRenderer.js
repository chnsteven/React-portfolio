import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import YAML from "js-yaml";

const verloren = "/projects/Verloren.md";
const cosmania = "/projects/Cosmania.md";
const insightUBC = "/projects/InsightUBC.md";
const javaApp = "/projects/JavaApp.md";

const MarkdownReader = () => {
  const [markdownDataArray, setMarkdownDataArray] = useState([]);

  useEffect(() => {
    const fetchMarkdownData = async () => {
      try {
        const projectMarkdowns = [verloren, cosmania, insightUBC, javaApp];
        const fetchDataPromises = projectMarkdowns.map(async (filePath) => {
          const response = await fetch(filePath);
          const data = await response.text();

          // Separate YAML front matter and content
          const [frontMatter, markdownContent] = data.split("---").slice(1);

          // Parse YAML front matter using js-yaml
          const yamlData = YAML.safeLoad(frontMatter.trim()) || {};

          return { filePath, yamlData, markdownContent };
        });

        const fetchedDataArray = await Promise.all(fetchDataPromises);
        setMarkdownDataArray(fetchedDataArray);
      } catch (error) {
        console.error("Error fetching Markdown data:", error);
      }
    };

    fetchMarkdownData();
  }, []);

  if (!markdownDataArray.length) {
    return <div>Loading...</div>;
  }

  // Parse YAML front matter

  return (
    <div>
      {markdownDataArray.map((markdownData, index) => (
        <div key={index}>
          {/* <h1>{markdownData.yamlData.title}</h1>
          <p>{markdownData.yamlData.excerpt}</p> */}
          <ReactMarkdown>{markdownData.markdownContent}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default MarkdownReader;
