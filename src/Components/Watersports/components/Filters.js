import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utils/helpers";
import { motion } from "framer-motion";
import "./Filters.scss";

const Filters = () => {
  const {
    filters: { text, location, type, swimming_pool },
    updateFilters,
    resetFilters,
    all_watersports,
  } = useFilterContext();

  const locations = getUniqueValues(all_watersports, "location");
  const types = getUniqueValues(all_watersports, "type");

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
          {/* location */}
          <div className="form-control">
            <h5>location</h5>
            <div>
              {locations.map((c, index) => {
                return (
                  <motion.button
                    whileHover={{ scale: 1.1, originX: 0 }}
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="location"
                    className={`${
                      location === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </motion.button>
                );
              })}
            </div>
          </div>
          {/* end of location */}
          {/* type */}
          <div className="form-control">
            <h5>type</h5>
            <select
              name="type"
              value={type}
              onChange={updateFilters}
              className="type"
            >
              {types.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of type */}

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
        <button type="button" className="reset-btn" onClick={resetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
