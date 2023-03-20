import { Link } from "react-router-dom";

// Import Custome Hooks
import useAxios from "./../../../CustomeHooks/useAxios/useAxios";
import usePreventRouterLinks from "./../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";

// Main Footer Footer Sass File
import "./Footer.scss";

// Footer Footer Component
const FooterFooter = ({ copyRight }) => {
  const { preventRouterLinks } = usePreventRouterLinks(
    `${process.env.PUBLIC_URL}/`
  );

  // Fetch Social
  const { data: social = [] } = useAxios("./Apis/social.json", []);

  // Get Social List
  const socialList = social.map((item) => {
    return (
      <a
        key={item.id}
        href={item.link}
        target="_blank"
        rel="noreferrer"
        aria-label={item.name}
      >
        <i className={`icon ${item.icon}`}></i>
      </a>
    );
  });

  return (
    <footer className="footer-footer">
      <Link
        to={`${process.env.PUBLIC_URL}/`}
        onClick={preventRouterLinks}
        className="logo"
      >
        <div className="logo-text">
          Kite <span>& Fun</span>
        </div>
      </Link>

      <p className="copy-right">{copyRight}</p>

      <div className="social-links">{socialList}</div>
    </footer>
  );
};

export default FooterFooter;
