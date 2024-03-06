import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme
      appearance="light"
      accentColor="orange"
      grayColor="sage"
      radius="full"
      scaling="110%"
    >
      <App />
      <ThemePanel />
    </Theme>
  </React.StrictMode>,
);
