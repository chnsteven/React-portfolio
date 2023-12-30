import React, { useEffect, useState } from "react";
// import NavigationGrid from "../components/NavigationGrid";
// import ScrollToTopButton from "../components/ScrollToTopButton";
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setIsVisible(true);
  }, []);
  return (
    <div className={`fade-in ${isVisible ? 'active' : ''}`}>
      <div className="home-page-container">
        hello
      </div>
      {/* <NavigationGrid />
      <ScrollToTopButton /> */}
    </div>
  );
}

export default Home;
