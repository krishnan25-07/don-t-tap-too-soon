
import React from "react";
import { createRoot } from "react-dom/client";
import ScoreApp from "./ScoreApp.jsx";
import "./styles/Score.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScoreApp />
  </React.StrictMode>
);
