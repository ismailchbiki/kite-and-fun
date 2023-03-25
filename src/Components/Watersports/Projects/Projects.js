import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

// Import Custome Hooks
import useThrottle from "../../../CustomeHooks/useThrottle/useThrottle";
import usePreventRouterLinks from "../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";

// Main Watersports Projects Sass File
import "./Projects.scss";

// Watersports Projects Component
const WatersportsProjects = ({ projects, type, projectsContainer }) => {
  // Custome Hooks
  const { throttle } = useThrottle();
  const { preventRouterLinks, isPathMatched } = usePreventRouterLinks(
    `${process.env.PUBLIC_URL}/watersports`
  );

  // Default Number Of Projects
  const defaultNumber = 9;

  // Number Of Projects State
  const [numberOfProjects, setNumberOfProjects] = useState(defaultNumber);

  const throttleViewAllProjects = throttle(() => {
    if (numberOfProjects !== projects.length) {
      setNumberOfProjects(projects.length);
    } else {
      setNumberOfProjects(defaultNumber);
    }
  }, 500);

  const viewAllProjects = (e) => {
    preventRouterLinks(e);
    throttleViewAllProjects();
  };

  // Get Projects List
  const projectsList = projects.map((project, index) => {
    return index < numberOfProjects ? (
      <div
        key={project.id}
        className={`${
          project.type === type || type === "All Work"
            ? "project"
            : "project hidden"
        }`}
      >
        <Link
          to={`${process.env.PUBLIC_URL}/watersports`}
          onClick={preventRouterLinks}
          className="project-link"
          aria-label="Project Link"
        ></Link>

        <figure>
          <div className="project-image">
            <img src={project.image} alt={project.caption} />
            <span className="type">{project.type}</span>
          </div>
          <figcaption>{project.caption}</figcaption>
        </figure>
      </div>
    ) : null;
  });

  return (
    <Fragment>
      <div className="projects" ref={projectsContainer}>
        {projectsList}
      </div>
      <div className="watersports-link">
        <Link
          to={`${process.env.PUBLIC_URL}/watersports`}
          onClick={isPathMatched ? viewAllProjects : null}
        >
          {numberOfProjects >= projects.length ? "View Less" : "View All"}
        </Link>
      </div>
    </Fragment>
  );
};

export default WatersportsProjects;
