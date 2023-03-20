import React, { useState } from "react";

// Import Custome Hooks
import { useDarkTheme } from "./../../../CustomeHooks/useDarkTheme/useDarkTheme";
import useThrottle from "./../../../CustomeHooks/useThrottle/useThrottle";

// Main About Body Sass File
import "./Body.scss";

// About Body Component
const AboutBody = (props) => {
  const darkTheme = useDarkTheme();
  const { throttle } = useThrottle();

  const [readMore, setReadMore] = useState(false);

  // Handle Read More Function
  const handleReading = throttle((e) => {
    e.target.parentElement.style.opacity = "0";

    setTimeout(() => {
      setReadMore((prevReadMore) => !prevReadMore);
      e.target.parentElement.style.opacity = "1";
    }, 300);
  }, 700);

  const {
    content: { image, image_dark },
  } = props;

  return (
    <section className="about-body">
      <div className="about-image">
        <img
          src={darkTheme ? image_dark : image}
          alt="About"
          draggable="false"
        />
      </div>

      <div className="about-desc">
        <h3 className="desc-title">Ultimate guide to Morocco</h3>

        <p className="desc-paragraph">
          {!readMore ? (
            <div>
              Welcome to our informative website about kitesurf and water sports
              in Morocco! Discover the best kite schools, water sports
              activities, and ...
            </div>
          ) : (
            <div>
              Welcome to our informative website about kitesurf and water sports
              in Morocco! Discover the best kite schools, water sports
              activities, and culture that this beautiful country has to offer.
            </div>
          )}
        </p>

        <p className="desc-paragraph">
          {!readMore ? (
            <div>
              Our website is dedicated to helping tourists and foreigners
              explore the exciting world of kitesurf and water sports in
              Morocco. With our extensive knowledge of the country's top kite
              schools, equipment rentals, and water sports activities, we aim to
              provide our visitors with a one-stop-shop for ...
            </div>
          ) : (
            <div>
              Our website is dedicated to helping tourists and foreigners
              explore the exciting world of kitesurf and water sports in
              Morocco. With our extensive knowledge of the country's top kite
              schools, equipment rentals, and water sports activities, we aim to
              provide our visitors with a one-stop-shop for all their
              kiteboarding and water sports needs. Whether you're a beginner or
              an experienced kiteboarder, we have everything you need to make
              the most out of your time in Morocco. Not only will you find
              useful information about kitesurfing and other water sports, but
              we also offer insights into Morocco's rich cultural heritage.
              Discover the country's unique blend of Arabic, African, and
              European influences while indulging in local cuisine, shopping in
              traditional markets, and exploring historical landmarks. Let us be
              your guide to the ultimate adventure in Morocco!
            </div>
          )}
        </p>

        <button className="desc-btn" onClick={handleReading}>
          {!readMore ? "Read More" : "Read Less"}
        </button>
      </div>
    </section>
  );
};

export default AboutBody;
