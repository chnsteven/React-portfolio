import React from "react";
import "../App.css";
import Banner from "../assets/Banner.jpg";
function MainBanner() {
  return (
      <img className="fit-picture" src={Banner} alt="Banner of Steven Chen" />
  );
}

export default MainBanner;
