import { Link } from "react-router-dom";
import List from "../components/List.jsx";

function HomePage({ functionData, handleDelete }) {
  return (
    <>
      <h1>My recipes</h1>
      <Link to="/add-recipe">
        <button type="button">Add Recipe</button>
      </Link>
      <List functionData={functionData} handleDelete={handleDelete} />
    </>
  );
}

export default HomePage;
