import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Product.scss";

const Product = ({ image, name, id, location }) => {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} className="product-container">
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} />
          <div className="link">
            <FaSearch />
          </div>
        </Link>
      </motion.div>
      <footer>
        <span>{name}</span>
        <p>{location}</p>
      </footer>
    </div>
  );
};

export default Product;
