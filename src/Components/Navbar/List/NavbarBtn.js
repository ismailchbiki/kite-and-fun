import { Link } from "react-router-dom";

const NavbarBtn = ({ buttonText, handleCLick }) => {
  return (
    <>
      <li className="navbar-item navbar-btn">
        <Link
          to="/"
          onClick={(e) => handleCLick(e, "/")}
          className="navbar-link"
        >
          <span className="navbar-btn-text">{buttonText}</span>
        </Link>
      </li>
    </>
  );
};

export default NavbarBtn;
