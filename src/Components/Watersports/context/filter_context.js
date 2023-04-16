import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_WATERSPORTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_WATERSPORTS,
  UPDATE_FILTERS,
  FILTER_WATERSPORTS,
  RESET_FILTERS,
} from "../actions";
import { useWatersportsContext } from "./watersports_context";

const initialState = {
  filtered_watersports: [],
  all_watersports: [],
  grid_view: true,
  filters: {
    text: "",
    type: "all",
    location: "all",
    color: "all",
    swimming_pool: false,
  },
  // For default sort order. Comment it out to use order of json data
  sort: "name-a",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { watersports } = useWatersportsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_WATERSPORTS, payload: watersports });
  }, [watersports]);

  useEffect(() => {
    dispatch({ type: FILTER_WATERSPORTS });
    dispatch({ type: SORT_WATERSPORTS });
  }, [watersports, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "location") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "swimming_pool") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const resetFilters = () => {
    dispatch({ type: RESET_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
