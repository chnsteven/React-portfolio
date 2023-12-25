import React from "react";
// import Banner from "../assets/banner.jpg";
import emailIcon from "../assets/icons/email.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import mobilePhoneIcon from "../assets/icons/mobile.svg";
function Footer() {
  return (
    <footer>
      <div className="contact-columns">
        <div className="contact-column">
          <p>
            <a
              href="https://www.linkedin.com/in/steven-chen-a62226276/"
              className="footer-link hover-text-shadow"
            >
              <img
                className="footer-icon"
                src={linkedinIcon}
                alt="linkedin icon"
              />
              Linkedin
            </a>
          </p>
          <p>
            <a
              href="https://github.com/chnsteven"
              className="footer-link hover-text-shadow"
            >
              <img className="footer-icon" src={githubIcon} alt="github icon" />
              Github
            </a>
          </p>
        </div>
        <div className="contact-column">
          <p>
            <img className="footer-icon" src={emailIcon} alt="email icon" />
            Email: chensteven0617@gmail.com
          </p>
          <p>
            <img
              className="footer-icon"
              src={mobilePhoneIcon}
              alt="mobile phone icon"
            />
            Mobile Phone: 604-765-4987
          </p>
        </div>
        {/* <div className="contact-column">
          <img
            className="fit-picture"
            src={Banner}
            alt="Banner of Steven Chen"
          />
        </div> */}
      </div>
      <div className="license-link">
        <p>
          Uicons by{" "}
          <a
            className="footer-link hover-text-shadow"
            href="https://www.flaticon.com/uicons"
          >
            Flaticon
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
