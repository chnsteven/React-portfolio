import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  const enterPortfolio = () => {
    setIsHidden((prevHidden) => !prevHidden);
    navigate('/about');
    // You can add additional logic or callbacks here if needed
  };
  return (
    <div className={`Home fade ${isHidden ? 'hide' : 'show'}`}>
      <p>Your component content here</p>
      <button className="btn btn-primary" onClick={enterPortfolio}>
        Toggle Fade
      </button>
    </div>
  );
}

export default Home;
