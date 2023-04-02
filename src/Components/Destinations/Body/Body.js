import { useNavigate } from "react-router-dom";

// Import Custome Hooks
import usePreventRouterLinks from "../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";

// Main Destinations Container Sass File
import "./Body.scss";

// Destinations Container Component
const DestinationsBody = ({ content }) => {
  const { preventRouterLinks } = usePreventRouterLinks(
    `${process.env.PUBLIC_URL}/destinations`
  );

  const navigate = useNavigate();
  const handleButtonClick = (id) => {
    navigate(`${process.env.PUBLIC_URL}/destination/${id}`);
  };

  // Get Destinations List
  const destinationsList = content.map((destination) => {
    return (
      <div key={destination.id} className="snip1482">
        <figcaption>
          <h2>{destination.title}</h2>
          <p>{destination.body}</p>
        </figcaption>
        <a
          onClick={() => handleButtonClick(destination.id)}
          {...preventRouterLinks}
        >
          <></>
        </a>
        <img
          src={destination.image && destination.image}
          alt={destination.alt && destination.alt}
        />
      </div>
    );
  });

  return <div className="destinations-cards">{destinationsList}</div>;
};

export default DestinationsBody;
