import React from "react";
import "../App.css";
import Banner from "../assets/Banner.jpg";
function MainBanner() {
  return (
    <div id="banner">
      <h3 id="banner-text">Steven Chen</h3>
      <img className="fit-picture" src={Banner} alt="Banner of Steven Chen" />
    </div>
  );
}

export default MainBanner;
