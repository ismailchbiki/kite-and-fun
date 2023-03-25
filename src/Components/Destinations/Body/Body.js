import { useNavigate } from "react-router-dom";

// Import Custome Hooks
import usePreventRouterLinks from "../../../CustomeHooks/usePreventRouterLinks/usePreventRouterLinks";

// Main Destinations Container Sass File
import "./Body.scss";

// Destinations Container Component
const DestinationsBody = ({ content, buttonText }) => {
  const { preventRouterLinks } = usePreventRouterLinks(
    `${process.env.PUBLIC_URL}/destinations`
  );

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`${process.env.PUBLIC_URL}/destination`);
  };

  // Get Destinations List
  const destinationsList = content.map((destination) => {
    return (
      <article className="destination-card">
        <img
          className="destination-card__background"
          src={destination.image && destination.image}
          alt="Cartagena's cathedral at the background and some colonial style houses"
        />
        <div className="destination-card__content | flow">
          <div className="destination-card__content--container | flow">
            <h2 className="destination-card__title">{destination.title}</h2>
            <p className="destination-card__description">{destination.body}</p>
          </div>
          <button
            className="destination-card__button"
            onClick={handleButtonClick}
            {...preventRouterLinks}
          >
            {buttonText}
          </button>
        </div>
      </article>
    );
  });

  return (
    <section className="destinations-container">{destinationsList}</section>
  );
};

export default DestinationsBody;
