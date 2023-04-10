import React from "react";
import Product from "./Product";
import "./GridView.scss";

const GridView = ({ products }) => {
  return (
    <div className="GridView">
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
