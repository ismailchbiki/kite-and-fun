import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Filters.scss";

const Filters = () => {
  const {
    filters: { text, category, location, color, swimming_pool },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "location");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <div className="filter">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <motion.button
                    whileHover={{ scale: 1.1, originX: 0 }}
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </motion.button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className="form-control">
            <h5>location</h5>
            <select
              name="location"
              value={location}
              onChange={updateFilters}
              className="location"
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of color */}

          {/* swimming_pool */}
          <div className="form-control swimming_pool">
            <label htmlFor="swimming_pool"> Swimming Pool</label>
            <input
              type="checkbox"
              name="swimming_pool"
              id="swimming_pool"
              onChange={updateFilters}
              checked={swimming_pool}
            />
          </div>
          {/* end of swimming_pool */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
