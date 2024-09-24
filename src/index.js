import React from "react";
import ReactDOM from "react-dom/client"; // Cambia el import aquí
import "./styles/input.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
// import { Auth0Provider } from "@auth0/auth0-react";

// Usa createRoot en lugar de render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {/* <Auth0Provider
    domain=""
    clientId=""
    redirectUri={}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Auth0Provider> */}
  </Provider>
);
