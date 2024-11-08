import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ClickContextProvider from "./utils/ClickContext.jsx";

createRoot(document.getElementById("root")).render(
  <ClickContextProvider>
    <App />
  </ClickContextProvider>
);
