import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./components/HomeComponent/Home";
import About from "./components/AboutComponent/About";
import Art from "./components/ArtComponent/Art";

import Navigation from "./components/NavbarComponent/Navbar";
import Sidebar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter style={{ margin: 0, padding: 0 }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/aboutMe" />
        <Route component={Art} path="/art" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
