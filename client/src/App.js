import "./App.css";
import MainBanner from "./components/MainBanner";
import NavigationBar from "./components/NavigationBar";
import {navigationLinks} from "./utils/constants";


function App() {
  return (
    <div className="App">
      <MainBanner />
      <NavigationBar navigationLinks={navigationLinks}/>
    </div>
  );
}

export default App;
