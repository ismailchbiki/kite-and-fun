import { Link } from "react-router-dom";
import "./ListView.scss";

const ListView = ({ products }) => {
  return (
    <section className="listView">
      {products.map((product) => {
        const { id, image, name, description, location } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>
                {name} ({location})
              </h4>

              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
