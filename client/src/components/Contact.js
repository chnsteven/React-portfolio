import React from "react";
import MainBanner from "./MainBanner";
function Contact() {
  return (
    <div className="contact-columns">
      <div className="contact-column">
        <p>
          Linkedin:{" "}
          <a href="https://www.linkedin.com/in/steven-chen-a62226276/"
          className="footer-link hover-text-shadow">Link</a>
        </p>
        <p>
        Github: <a href="https://github.com/chnsteven"
        className="footer-link hover-text-shadow">Link</a>
      </p>
      </div>
      <div className="contact-column">
      <p>Email: chensteven0617@gmail.com</p>
      <p>Mobile Phone (Canada): 604-765-4987 </p>
      </div>
      <div className="contact-column">
        <MainBanner />
      </div>
    </div>
  );
}

export default Contact;
