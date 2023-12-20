import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Education from '../pages/Education';



export   const navigationLinks = [
    {title: "Home",
    path: "/",
    component: Home},
    {title: "About",
    path: "/about",
    component: About},
    {title: "Contact",
    path: "/contact",
    component: Contact},
    {title: "Projects",
    path: "/projects",
    component: Projects},
    {title: "Education",
    path: "/Education",
    component: Education}
  ];

  export const projectIds = ["Verloren", "Cosmania", "InsightUBC", "Java Application"];