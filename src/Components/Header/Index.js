import { useRef } from "react";

// Import Custome Hooks
import useThrottle from "./../../CustomeHooks/useThrottle/useThrottle";

// Main Header Sass File
import "./Index.scss";

const Header = () => {
  const { throttle } = useThrottle();

  // Scroll To Services Section Ref
  const header = useRef();

  // Scroll To Services Section Function
  const exploreFn = throttle(() => {
    window.scrollTo({
      top: header.current.offsetHeight,
      behavior: "smooth",
    });
  }, 1000);

  return (
    <header className="main-header" ref={header}>
      <div className="container">
        <div className="header-inner">
          <section className="header-desc">
            <h1 className="header-title">
              Unleash Your Adventure Spirit with Kitesurfing in
              <span> Morocco</span>
            </h1>
            <p className="header-paragraph"></p>
            <button className="header-btn" onClick={exploreFn}>
              Explore
            </button>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
