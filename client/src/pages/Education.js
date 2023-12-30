import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Markdown from "react-markdown";
import Badge from "../assets/badge.png";
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
  if (!frontMatter) return null;
  return (
    <div className="education-container">
      <header className="header">
        <h1>Steven Chen</h1>
        <p>
          <strong>Major courses:{" "}</strong>
          {
            frontMatter.major_courses.map((course, index) => {
              return (index != frontMatter.major_courses.length - 1 ? (<span key={index}>
                {course}{", "}
              </span>) : (
                <span key={index}>
                  {course}
                </span>)
              )
            })
          }
        </p>
        {/* <p>Web Developer and Designer</p> */}
      </header>

      <section className="education-section">
        <img className="certificate-badge" src={Badge} alt="Badge or Icon" />
        <div className="certificate">

          <div className="certificate-header">
            <h2>University of British Columbia</h2>
            <p>Graduation Certificate</p>
          </div>
          <div className="certificate-body">
            <p>
              This is to certify that
              <br />
              <strong>Steven Chen</strong>
              <br />
              has successfully completed the requirements for the degree of
              <br />
              <strong>Bachelor of Science in Combined major in Computer Science and Statistics</strong>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        &copy; 2023
      </footer>
    </div>
  );
}

export default Education;
