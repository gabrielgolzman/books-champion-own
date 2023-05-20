import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from "./App";
import { AuthenticationContextProvider } from "./components/context/AuthenticationContext/authentication.context";
import { ThemeContextProvider } from "./components/context/AuthenticationContext/theme.context";
import { APIContextProvider } from "./components/context/AuthenticationContext/api.context";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <APIContextProvider>
          <App />
        </APIContextProvider>
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
