import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const LinkItem = ({ id, linkText, link, handleCLick }) => {
  return (
    <>
      <li key={id} className="navbar-item">
        <NavLink
          exact="true"
          to={`${process.env.PUBLIC_URL}${link}`}
          className="navbar-link"
          onClick={(e) => handleCLick(e, `${process.env.PUBLIC_URL}${link}`)}
        >
          {linkText}
        </NavLink>
      </li>

      {/* <li className="navbar-item">
        <ScrollLink
          to={`${process.env.PUBLIC_URL}${linkText}`}
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
