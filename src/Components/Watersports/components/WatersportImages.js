import { useState } from "react";
import "./WatersportImages.scss";

const WatersportImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <div className="image-gallery">
      <img src={main.url} className="main-image" alt="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WatersportImages;
