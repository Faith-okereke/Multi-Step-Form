import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"
import { BrowserRouter } from "react-router-dom";
import Routers from "./assets/Routes/Router.jsx";
import Nav from "./assets/Component/Nav.jsx";
import Rootstore from "./assets/Data/Rootstore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Rootstore>
        <div className="flex bg-white p-3" 
        >
          <Nav />
          <Routers />
        </div>
        <App />
      </Rootstore>
    </BrowserRouter>
  </React.StrictMode>
);
