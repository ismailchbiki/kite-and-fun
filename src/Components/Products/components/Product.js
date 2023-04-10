import React from "react";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Product.scss";

const Product = ({ image, name, price, id }) => {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} className="product-container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </motion.div>
      <footer>
        <h5>{name}</h5>
        <p className="price">{formatPrice(price)}</p>
      </footer>
    </div>
  );
};

export default Product;
