import { NavLink } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

const LinkItem = ({ id, linkText, link, handleCLick }) => {
  return (
    <>
      <li key={id} className="navbar-item">
        <NavLink
          exact="true"
          to={`${link}`}
          className="navbar-link"
          onClick={(e) => handleCLick(e, `${link}`)}
        >
          {linkText}
        </NavLink>
      </li>

      {/* <li className="navbar-item">
        <ScrollLink
          to={`${linkText}`}
          smooth={true}
          duration={200}
          className="navbar-link"
        >
          {linkText}
        </ScrollLink>
      </li> */}
    </>
  );
};

export default LinkItem;
