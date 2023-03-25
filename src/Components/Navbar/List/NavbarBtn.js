import { Link } from "react-router-dom";

const NavbarBtn = ({ buttonText, handleCLick }) => {
  return (
    <>
      <li className="navbar-item navbar-btn">
        <Link
          to={`${process.env.PUBLIC_URL}/`}
          onClick={(e) => handleCLick(e, process.env.PUBLIC_URL + "/")}
          className="navbar-link"
        >
          <span className="navbar-btn-text">{buttonText}</span>
        </Link>
      </li>
    </>
  );
};

export default NavbarBtn;
