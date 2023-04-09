import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ProductsProvider } from "./Components/Products/context/products_context";
import { FilterProvider } from "./Components/Products/context/filter_context";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);

reportWebVitals();
