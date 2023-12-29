import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useState, useEffect } from "react";
import axios from "axios";
import Markdown from "react-markdown";
function Education() {
  const [education, setEducation] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3001/education")
      .then((response) => {
        console.log("Education API response:", response.data);
        setEducation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching education:", error);
      });
  }, []);
  const { frontMatter } = education;
  return (
    <div>
      <ScrollToTopButton />
      {frontMatter && (
        <>
          <h2>{frontMatter.name}</h2>
          <p>{frontMatter.start_date} - {frontMatter.end_date}</p>
          <p>{frontMatter.faculty}</p>
          {/* Add other details as needed */}
          <Markdown>{frontMatter.name}</Markdown>
        </>
      )}
    </div>
  );
}

export default Education;
