import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useProductsContext } from "./context/products_context";
import { Loading, ProductImages, Stars } from "./components";
import "./Products-shared.scss";
import "./SingleProductPage.scss";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
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
  } = product;

  return (
    <div className="section section-center page">
      <Link to="/products" className="btn">
        back to products
      </Link>
      <div className="product-center">
        <ProductImages images={images} />
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

export default SingleProductPage;
