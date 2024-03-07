import React from "react";
import ReactDOM from "react-dom/client";
import DarkModeContextProvider from "./contexts/DarkModeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./stores/index.js";

import App from "./App.jsx";

import "./styles/index.css";

// Supports weights 100-900
import "@fontsource-variable/inter";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <DarkModeContextProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </DarkModeContextProvider>
);
