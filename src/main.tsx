import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globalStyles/variables.css";
import "./globalStyles/reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
