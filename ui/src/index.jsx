import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";

import "./main_style/index.css";

const app = document.getElementById("root")
const root = createRoot(app)
root.render(<App />)