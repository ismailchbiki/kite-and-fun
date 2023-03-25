// Main Watersports Header Sass File
import "./Header.scss";

// Watersports Header Component
const WatersportsHeader = ({ header: { title, body } }) => {
  return (
    <header className="watersports-header">
      <h2 className="watersports-title">{title}</h2>
      <p className="watersports-paragraph">{body}</p>
    </header>
  );
};

export default WatersportsHeader;
