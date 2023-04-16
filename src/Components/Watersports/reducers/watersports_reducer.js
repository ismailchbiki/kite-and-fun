import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_WATERSPORTS_BEGIN,
  GET_WATERSPORTS_SUCCESS,
  GET_WATERSPORTS_ERROR,
  GET_SINGLE_WATERSPORT_BEGIN,
  GET_SINGLE_WATERSPORT_SUCCESS,
  GET_SINGLE_WATERSPORT_ERROR,
} from "../actions";

const watersports_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_WATERSPORTS_BEGIN) {
    return { ...state, watersports_loading: true };
  }
  if (action.type === GET_WATERSPORTS_SUCCESS) {
    const featured_watersports = action.payload.filter(
      (watersport) => watersport.featured === true
    );
    return {
      ...state,
      watersports_loading: false,
      watersports: action.payload,
      featured_watersports,
    };
  }
  if (action.type === GET_WATERSPORTS_ERROR) {
    return { ...state, watersports_loading: false, watersports_error: true };
  }
  if (action.type === GET_SINGLE_WATERSPORT_BEGIN) {
    return {
      ...state,
      single_watersport_loading: true,
      single_watersport_error: false,
    };
  }
  if (action.type === GET_SINGLE_WATERSPORT_SUCCESS) {
    return {
      ...state,
      single_watersport_loading: false,
      single_watersport: action.payload,
    };
  }
  if (action.type === GET_SINGLE_WATERSPORT_ERROR) {
    return {
      ...state,
      single_watersport_loading: false,
      single_watersport_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default watersports_reducer;
