import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./globals.css";

import { LangProvider } from "./context/lang";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
