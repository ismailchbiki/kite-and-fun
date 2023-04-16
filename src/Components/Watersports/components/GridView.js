import React from "react";
import Watersport from "./Watersport";
import "./GridView.scss";

const GridView = ({ watersports }) => {
  return (
    <div className="GridView">
      <div className="watersports-container">
        {watersports.map((watersport) => {
          return <Watersport key={watersport.id} {...watersport} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
