import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);
  const enterPortfolio = () => {
    navigate("/about");
  };
  return (
    <div className={`fade-in ${isVisible ? "active" : ""}`}>
      <button onClick={enterPortfolio}>Portfolio</button>
    </div>
  );
}

export default Home;
