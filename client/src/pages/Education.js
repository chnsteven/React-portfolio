import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useState, useEffect } from "react";
import axios from "axios";
function Education() {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/education")
      .then((response) => {
        setEducation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching education:", error);
      });
  }, []);

  return (
    <div>
      <ScrollToTopButton />
      {education.frontMatter.name}
    </div>
  );
}

export default Education;
