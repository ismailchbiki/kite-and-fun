import React, { useState, useRef } from "react";

// Import Custome Hooks
import useAxios from "../../CustomeHooks/useAxios/useAxios";
import { useDarkTheme } from "../../CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import WatersportsProjects from "./Projects/Projects";
import WatersportsNav from "./Nav/Nav";
import WatersportsHeader from "./Header/Header";
import Loading from "../Loading/Index";
import Error from "../Error/Index";

// Main About Sass File
import "./Index.scss";

// Watersports Background
const WatersportsBg = {
  backgroundImage: "url('./Images/Watersports/background.svg')",
};

const WatersportsBgDark = {
  backgroundImage: "url('./Images/Watersports/background-dark.svg')",
};

// Main Watersports Component
const Watersports = () => {
  // Custome Hooks
  const darkTheme = useDarkTheme();

  // Fetch data
  const {
    data: { header = {}, nav = [], projects = [] },
    success,
    isPending,
    error,
  } = useAxios("./Apis/Watersports.json", []);

  // Refs
  const projectsContainer = useRef();

  // Type State
  const [type, setType] = useState("All Work");

  // Chang Type Of Projects Viewed
  const changeType = (value) => {
    if (value !== type && projectsContainer) {
      projectsContainer.current.classList.add("change-type");

      setTimeout(() => {
        projectsContainer.current.classList.remove("change-type");
      }, 500);

      setTimeout(() => {
        setType(value);
      }, 300);
    }
  };

  return (
    <section
      // smooth scroll
      id="watersports"
      className="watersports"
      style={
        darkTheme
          ? success
            ? WatersportsBgDark
            : null
          : success
          ? WatersportsBg
          : null
      }
    >
      {isPending && <Loading />}

      {success && (
        <div className="container">
          <WatersportsHeader header={header} />

          <section className="watersports-body">
            <WatersportsNav nav={nav} type={type} changeType={changeType} />
            <WatersportsProjects
              projects={projects}
              type={type}
              projectsContainer={projectsContainer}
            />
          </section>
        </div>
      )}

      {error && <Error message={error.message} name="Watersports" />}
    </section>
  );
};

export default Watersports;
