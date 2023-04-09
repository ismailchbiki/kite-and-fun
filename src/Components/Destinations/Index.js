// Import Custome Hooks
import useAxios from "../../CustomeHooks/useAxios/useAxios";
import { useDarkTheme } from "../../CustomeHooks/useDarkTheme/useDarkTheme";

// Import Components
import DestinationsBody from "./Body/Body";
import DestinationsHeader from "./Header/Header";
import Loading from "../Loading/Index";
import Error from "../Error/Index";

// Main Destinations Sass File
import "./Index.scss";

// Destinations Background
const DestinationsBg = {
  backgroundImage: "url(./Images/Destinations/background.svg)",
};

const DestinationsBgDark = {
  backgroundImage: "url(./Images/Destinations/background-dark.svg)",
};

// Main Destinations Component
const Destinations = () => {
  const darkTheme = useDarkTheme();

  // Fetch data
  const {
    data: { header = {}, content = [], buttonText = {} },
    success,
    isPending,
    error,
  } = useAxios("/Apis/Destinations.json", []);

  return (
    <section
      // smooth scroll
      id="destinations"
      className="destinations"
      style={
        darkTheme
          ? success
            ? DestinationsBgDark
            : null
          : success
          ? DestinationsBg
          : null
      }
    >
      {isPending && <Loading />}

      {success && (
        <div className="container">
          <DestinationsHeader header={header} />
          <DestinationsBody content={content} buttonText={buttonText} />
        </div>
      )}

      {error && <Error message={error.message} name="Destinations" />}
    </section>
  );
};

export default Destinations;
