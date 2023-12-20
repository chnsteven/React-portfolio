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

  const renderProjects = () => {
    let currentYear = null;
    return sortedProjects.map((project, index) => {
      const projectYear = project.frontMatter.start_date.substring(0, 4);
      const isCurrentYear = currentYear === projectYear;

      if(!isCurrentYear) {
        currentYear = projectYear;
        return (
          <div key={`year-${currentYear}`}>
            <h2>{currentYear}</h2>
            {renderProject(project)}
          </div>
        );
      }
      return renderProject(project);
    });
  };

  const renderProject = project => (
    <div key={project.frontMatter.start_date}>
      <h1>{project.frontMatter.title}</h1>
      <p>{project.frontMatter.excerpt}</p>

      {/* Render front matter properties */}
      <img src={project.frontMatter.cover_image} alt="Cover Image" />
      {project.frontMatter.video && (
        <iframe title="Video" src={project.frontMatter.video} />
      )}

      {/* Render sections using react-markdown */}
      <ReactMarkdown>{project.content}</ReactMarkdown>
    </div>
  );


  return <div>
    {renderProjects()}
  </div>
}
export default DisplayProjects;
