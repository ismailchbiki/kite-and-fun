import { Link } from "react-router-dom";

// Import Custome Hooks
import usePreventRouterLinks from "./../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";

// Main Navbar Logo Sass File
import "./Logo.scss";

// Navbar Logo Component
const NavbarLogo = () => {
  const { preventRouterLinks } = usePreventRouterLinks(
    `${process.env.PUBLIC_URL}/`
  );

  return (
    <Link
      to={`${process.env.PUBLIC_URL}/`}
      onClick={preventRouterLinks}
      className="logo"
    >
      <div className="logo-text">
        Kite <span>& Fun</span>
      </div>
    </Link>
  );
};

export default NavbarLogo;
