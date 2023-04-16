import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Watersport.scss";

const Watersport = ({ image, name, id, type }) => {
  return (
    <div>
      <motion.div whileHover={{ scale: 1.1 }} className="watersport-container">
        <Link to={`/watersports/${id}`}>
          <img src={image} alt={name} />
          <div className="link">
            <FaSearch />
          </div>
        </Link>
      </motion.div>
      <footer>
        <span>{name}</span>
        <p>{type}</p>
      </footer>
    </div>
  );
};

export default Watersport;
