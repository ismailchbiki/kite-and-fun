// Main Destinations Header Sass File
import "./Header.scss";

// Destinations Header Component
const DestinationsHeader = ({ header: { title, body } }) => {
  return (
    <header className="destinations-header">
      <h2 className="destinations-title">{title}</h2>
      <p className="destinations-paragraph">{body}</p>
    </header>
  );
};

export default DestinationsHeader;
