// Import Custome Hooks
import useAxios from "../../../CustomeHooks/useAxios/useAxios";
import usePreventRouterLinks from "../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";
import Links from "./Links";

// import NavbarBtn from "./NavbarBtn";

// scss
import "./List.scss";

// Navbar List Component
const NavbarList = ({ setNavbarOpen }) => {
  const { preventRouterLinks } = usePreventRouterLinks();

  // Fetch data
  const {
    data: { links = [], button = {} },
  } = useAxios("./Apis/navbar.json", []);

  const handleCLick = (e, link) => {
    preventRouterLinks(e, link);
    setNavbarOpen(false);
  };

  return (
    <ul className="navbar-list">
      <Links links={links} handleCLick={handleCLick} />
      {/* <NavbarBtn buttonText={button} handleCLick={handleCLick} /> */}
    </ul>
  );
};

export default NavbarList;
