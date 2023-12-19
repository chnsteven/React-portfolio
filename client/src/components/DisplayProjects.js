import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function DisplayProjects({ projectIds }) {
  const isAscendingOrder = false;
  const [projects, setProjects] = useState([]);
  useEffect(() => {

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


  const sortedProjects = [...projects].sort((a, b,) => {
    if (!projects.length) {
      return alert("No project data to display");
    }
    const dateA = new Date(a.frontMatter.start_date);
    const dateB = new Date(b.frontMatter.start_date);
    return isAscendingOrder ? dateA - dateB : dateB - dateA;
  });

  return (
    <div>
      {sortedProjects.map((project, index) => (
        <div key={index}>
          {/* <h2>{project.frontMatter.title}</h2> */}
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  )
}
export default DisplayProjects;
