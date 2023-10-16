import { useEffect, useRef, useState } from "react";
import "./components_styles/App.css";

// Utils for NUI integration
import { useNui, callNui } from "../utils/FiveM";

const App = () => {
  return (
    <div className="App">
      <h1>Basic project NUI + REACT</h1>
      <h2>
        By: 
        <a href="https://t.me/Fonlogen">Fonlogen</a>
      </h2>
    </div>
  );
};

export default App;
