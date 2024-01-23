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
        <div className="flex bg-white p-0 sm:p-3 m-0  sm:mt-[40px] rounded-xl shadow-xl  flex-col sm:flex sm:flex-row " 
        >
          <Nav />
          <Routers />
        </div>
        <App />
      </Rootstore>
    </BrowserRouter>
  </React.StrictMode>
);
