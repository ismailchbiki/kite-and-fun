import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const WatersportList = () => {
  const { filtered_watersports: watersports, grid_view } = useFilterContext();
  if (watersports.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, there is no match to your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView watersports={watersports} />;
  }
  return <GridView watersports={watersports}>watersport list</GridView>;
};

export default WatersportList;
