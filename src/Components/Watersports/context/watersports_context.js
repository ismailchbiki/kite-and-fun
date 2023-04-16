import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/watersports_reducer";
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

const initialState = {
  isSidebarOpen: false,
  watersports_loading: false,
  watersports_error: false,
  watersports: [],
  featured_watersports: [],
  single_watersport_loading: false,
  single_watersport_error: false,
  single_watersport: {},
};

const WatersportsContext = React.createContext();

export const WatersportsProvider = ({ children }) => {
  const [url] = useState("/Apis/Watersports.json");
  const [url_info] = useState("/Apis/Watersports_Info.json");
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchWatersports = async (url) => {
    dispatch({ type: GET_WATERSPORTS_BEGIN });
    try {
      const response = await axios.get(url);
      const watersports = response.data;
      dispatch({ type: GET_WATERSPORTS_SUCCESS, payload: watersports });
    } catch (error) {
      dispatch({ type: GET_WATERSPORTS_ERROR });
    }
  };

  const fetchSingleWatersport = async (id) => {
    dispatch({ type: GET_SINGLE_WATERSPORT_BEGIN });
    try {
      const response = await axios.get(url_info);
      const watersports = response.data;
      const singleWatersport = watersports.find(
        (watersport) => watersport.id === id
      );
      if (singleWatersport) {
        dispatch({
          type: GET_SINGLE_WATERSPORT_SUCCESS,
          payload: singleWatersport,
        });
      } else {
        dispatch({ type: GET_SINGLE_WATERSPORT_ERROR });
      }
    } catch (error) {
      dispatch({ type: GET_SINGLE_WATERSPORT_ERROR });
    }
  };

  useEffect(() => {
    fetchWatersports(url);
    // eslint-disable-next-line
  }, []);

  return (
    <WatersportsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleWatersport }}
    >
      {children}
    </WatersportsContext.Provider>
  );
};
// make sure use
export const useWatersportsContext = () => {
  return useContext(WatersportsContext);
};
