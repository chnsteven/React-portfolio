import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { navigationLinks } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <Header navigationLinks={navigationLinks} />
      <Footer navigationLinks={navigationLinks} />
    </div>
  );
}

export default App;
