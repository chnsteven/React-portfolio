import React from "react";
import "../App.css";
import Banner from "../assets/Banner.jpg";
function MainBanner() {
  return (
    <div>
      <h1>Steven Chen</h1>
      <img className="fit-picture" src={Banner} alt="Banner of Steven Chen" />
    </div>
  );
}

export default MainBanner;
