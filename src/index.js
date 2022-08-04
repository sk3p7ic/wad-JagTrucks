import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { JagTrucksAuthenticationProvider } from "./contexts/AuthenticationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <JagTrucksAuthenticationProvider>
        <App />
      </JagTrucksAuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
