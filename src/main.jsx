import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./assets/Component/Nav.jsx";
import ContextStore from "./ContextStore.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextStore>
    <App />
    </ContextStore>
  </React.StrictMode>
);
