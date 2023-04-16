import { Link } from "react-router-dom";
import "./ListView.scss";

const ListView = ({ watersports }) => {
  return (
    <section className="listView">
      {watersports.map((watersport) => {
        const { id, image, name, description, type } = watersport;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>
                {name} ({type})
              </h4>

              <p>{description.substring(0, 150)}...</p>
              <Link to={`/watersports/${id}`} className="btn">
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
