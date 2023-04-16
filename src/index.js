import React from "react";
import App from "./App";
import "./index.scss";
import { createRoot } from "react-dom/client";
import { WatersportsProvider } from "./Components/Watersports/context/watersports_context";
import { FilterProvider } from "./Components/Watersports/context/filter_context";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WatersportsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </WatersportsProvider>
  </React.StrictMode>
);
