import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import YAML from "js-yaml";

const Markdown = (projectMarkdowns) => {
  const { projects } = projectMarkdowns;
  const [markdownDataArray, setMarkdownDataArray] = useState([]);
  useEffect(() => {
    const fetchMarkdownData = async () => {
      try {
        const fetchDataPromises = projects.map(async (filePath) => {
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
  }, [projects]);

  if (!markdownDataArray.length) {
    return <div>Loading...</div>;
  }

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

export default Markdown;
