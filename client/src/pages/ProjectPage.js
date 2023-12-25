import React from "react";
import Markdown from "react-markdown";
function ProjectPage({ project }) {
  return (
    <div>
      {/* <Markdown>{project.frontMatter.title}</Markdown> */}
      <Markdown>{project.content}</Markdown>
    </div>
  );
}

export default ProjectPage;
