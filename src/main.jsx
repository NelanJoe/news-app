import React from "react";
import ReactDOM from "react-dom/client";
import DarkModeContextProvider from "./contexts/DarkModeContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.jsx";

import "./styles/index.css";

// Supports weights 100-900
import "@fontsource-variable/inter";

const queryClient = new QueryClient();

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <DarkModeContextProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </DarkModeContextProvider>
);
