import { useState } from "react";
import "./App.css";

// FONT AWESOME LIB
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// SCENES + COMPONENTS
import HomePage from "./scenes/homePage/homePage";
import Navbar from "./components/Navbar";
// import MenuPage from "scenes/menuPage/menuPage";

function App() {
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}

export default App;
