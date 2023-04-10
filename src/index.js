import React from "react";
import App from "./App";
import "./index.scss";
import { createRoot } from "react-dom/client";
import { ProductsProvider } from "./Components/Products/context/products_context";
import { FilterProvider } from "./Components/Products/context/filter_context";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
