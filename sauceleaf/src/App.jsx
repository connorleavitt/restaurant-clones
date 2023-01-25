import { useState } from "react";
import "./App.css";

// FONT AWESOME LIB
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);
library.add(fas);

// SCENES + COMPONENTS
import HomePage from "./scenes/homePage/homePage";
// import MenuPage from "scenes/menuPage/menuPage";

function App() {
  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App;
