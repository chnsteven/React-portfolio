import "./App.css";
import "./css/projectDashboard.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { headerLinks } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <Header headerLinks={headerLinks} />
      <Footer />
    </div>
  );
}

export default App;
