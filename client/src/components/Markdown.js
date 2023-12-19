import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import YAML from "js-yaml";

const Markdown = (projectMarkdowns) => {
  const isAscendingOrder = false;
  const { projects } = projectMarkdowns;
  const [projectsArray, setProjectsArray] = useState([]);
  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const promises = projects.map(async (filePath) => {
          const response = await fetch(filePath);
          const data = await response.text();

          // Separate YAML front matter and content
          const [frontMatter, content] = data.split("---").slice(1);

          // Parse YAML front matter using js-yaml
          const metadata = YAML.safeLoad(frontMatter.trim()) || {};

          return { filePath, metadata, content };
        });
        setProjectsArray(await Promise.all(promises));
      } catch (error) {
        console.error("Error fetching Markdown data:", error);
      }
    };
    fetchProjectsData();
  }, [projects]);

  const sortedProjects = [...projectsArray].sort((a, b,) => {
    if (!projectsArray.length) {
      return alert("No project data to display");
    }
    const dateA = new Date(a.metadata.start_date);
    const dateB = new Date(b.metadata.start_date);
    return isAscendingOrder ? dateA - dateB : dateB - dateA;
  });

  return (
    <div>
      {sortedProjects.map((project, index) => (
        <div key={index}>
          {/* <h1>{markdownData.yamlData.title}</h1>
          <p>{markdownData.yamlData.excerpt}</p> */}
          <ReactMarkdown>{project.metadata.start_date}</ReactMarkdown>
          <ReactMarkdown>{project.content.Overview}</ReactMarkdown>
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default Markdown;
