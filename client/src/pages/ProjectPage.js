import React from "react";
import Markdown from "react-markdown";
function ProjectPage({ project }) {
  return (
    <div>
      {/* <Markdown>{project.frontMatter.title}</Markdown> */}
      <h1 className="title">
        <Markdown>{project.frontMatter.title}</Markdown>
      </h1>
    </div>
  );
}

export default ProjectPage;
