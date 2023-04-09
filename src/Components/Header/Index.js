import { useRef } from "react";

// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";
import useThrottle from "./../../CustomeHooks/useThrottle/useThrottle";

// Import Components
import Loading from "./../Loading/Index";
import Error from "./../Error/Index";

// Main Header Sass File
import "./Index.scss";

const Header = () => {
  const { throttle } = useThrottle();

  // Fetch data
  const {
    data: {
      title = { before: "", word: "", after: "" },
      body = "",
      button = "",
    },
    success,
    isPending,
    error,
  } = useAxios("/Apis/header.json", []);

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
    <header
      // smooth scroll
      id="Home"
      className="main-header"
      ref={header}
    >
      {isPending && <Loading />}

      <div className="container">
        {success && (
          <div className="header-inner">
            <section className="header-desc">
              <h1 className="header-title">
                {title.before} <span>{title.word}</span> {title.after}
              </h1>
              <p className="header-paragraph">{body}</p>
              <button className="header-btn" onClick={exploreFn}>
                {button}
              </button>
            </section>

            {/* In case there is an image on the banner */}
            {/* <section className="header-image">
              <img
                src={darkTheme ? image_dark : image}
                alt="header-Illustration"
                draggable="false"
              />
            </section> */}
          </div>
        )}
      </div>

      {error && <Error message={error.message} name="Header" />}
    </header>
  );
};

export default Header;
