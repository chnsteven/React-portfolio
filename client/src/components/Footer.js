import React from "react";
import emailIcon from "../assets/icons/email.svg";
import mobilePhoneIcon from "../assets/icons/mobile.svg";
function Footer() {
  return (
    <footer>
      <img className="icon" src={emailIcon} alt="email icon" />
      <p>
        chensteven0617@gmail.com
      </p>
      <img
        className="icon"
        src={mobilePhoneIcon}
        alt="mobile phone icon"
      />
      <p>
        604-765-4987
      </p>
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
