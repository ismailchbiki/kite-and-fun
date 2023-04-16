import {
  LOAD_WATERSPORTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_WATERSPORTS,
  UPDATE_FILTERS,
  FILTER_WATERSPORTS,
  RESET_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_WATERSPORTS) {
    return {
      ...state,
      all_watersports: [...action.payload],
      filtered_watersports: [...action.payload],
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_WATERSPORTS) {
    const { sort, filtered_watersports } = state;
    let tempWatersports = [...filtered_watersports];

    if (sort === "name-a") {
      tempWatersports = tempWatersports.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempWatersports = tempWatersports.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_watersports: tempWatersports };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_WATERSPORTS) {
    const { all_watersports } = state;
    const { text, location, type, swimming_pool } = state.filters;
    let tempWatersports = [...all_watersports];

    /* FILTERING */
    //text
    if (text) {
      tempWatersports = tempWatersports.filter((watersport) => {
        return watersport.name.toLowerCase().startsWith(text);
      });
    }
    //location
    if (location !== "all") {
      tempWatersports = tempWatersports.filter(
        (watersport) => watersport.location === location
      );
    }
    //type
    if (type !== "all") {
      tempWatersports = tempWatersports.filter(
        (watersport) => watersport.type === type
      );
    }

    //swimming_pool
    if (swimming_pool) {
      tempWatersports = tempWatersports.filter(
        (watersport) => watersport.swimming_pool === true
      );
    }
    return { ...state, filtered_watersports: tempWatersports };
  }
  if (action.type === RESET_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        type: "all",
        location: "all",
        swimming_pool: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
