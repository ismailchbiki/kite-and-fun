import { useParams } from "react-router-dom";

function Destination() {
  const { id } = useParams();
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "22%",
        }}
      >
        Destination Title {id}
      </h1>
    </div>
  );
}

export default Destination;
