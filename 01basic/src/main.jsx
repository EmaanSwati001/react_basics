import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // only import App, no CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
