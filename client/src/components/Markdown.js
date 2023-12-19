import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


function Markdown() {

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const projectIds = ["verloren", "cosmania", "insightUBC", "javaApp"];

    const projectRequests = projectIds.map(projectId =>
      axios.get(`http://localhost:3001/projects/${projectId}`)
    );
    const fetchProjects = async () => {
      try {
        const projectPromises = await Promise.all(projectRequests);
        const projectsData = projectPromises.map(project => project.data);
        setProjects(projectsData);
      }
      catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    fetchProjects();
  }, []);


  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          {/* <h2>{project.frontMatter.title}</h2> */}
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  )
}
export default Markdown;
