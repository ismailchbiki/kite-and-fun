// Import Custome Hooks
import useAxios from "./../../CustomeHooks/useAxios/useAxios";
import { useDarkTheme } from "./../../CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import ServicesBody from "./Body/Body";
import ServicesHeader from "./Header/Header";
import Loading from "./../Loading/Index";
import Error from "./../Error/Index";

// Main Services Sass File
import "./Index.scss";

// Services Background
const servicesBg = {
  backgroundImage: "url(./Images/Services/background.svg)",
};

const servicesBgDark = {
  backgroundImage: "url(./Images/Services/background-dark.svg)",
};

// Main Services Component
const Services = () => {
  const darkTheme = useDarkTheme();

  // Fetch data
  const {
    data: { content = [] },
    success,
    isPending,
    error,
  } = useAxios("./Apis/services.json", []);

  return (
    <section
      className="services"
      style={darkTheme ? servicesBgDark : servicesBg}
    >
      {isPending && <Loading />}

      {success && (
        <div className="container">
          <ServicesHeader />
          <ServicesBody content={content} />
        </div>
      )}

      {error && <Error message={error.message} name="Services" />}
    </section>
  );
};

export default Services;
