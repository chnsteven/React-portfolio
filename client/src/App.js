import "./App.css";
import "./utils/css/projectDashboard.css";
import "./utils/css/popup.css";
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
