import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useWatersportsContext } from "./context/watersports_context";
import { Loading, WatersportImages, Stars } from "./components";
import "./Watersports-shared.scss";
import "./SingleWatersportPage.scss";

const SingleWatersportPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_watersport_loading: loading,
    single_watersport_error: error,
    single_watersport: watersport,
    fetchSingleWatersport,
  } = useWatersportsContext();

  useEffect(() => {
    fetchSingleWatersport(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  const {
    name,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    location,
    images,
  } = watersport;

  return (
    <div className="section section-center page">
      <Link to="/watersports" className="btn">
        Go Back
      </Link>
      <div className="watersport-center">
        <WatersportImages images={images} />
        <section className="content">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <p className="desc">{description}</p>
          <p className="info">
            <span>Available : </span>
            {stock > 0 ? "In stock" : "out of stock"}
          </p>
          <p className="info">
            <span>SKU : </span>
            {sku}
          </p>
          <p className="info">
            <span>Brand : </span>
            {location}
          </p>
          <hr />
        </section>
      </div>
    </div>
  );
};

export default SingleWatersportPage;
