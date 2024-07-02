import { Link } from "react-router-dom";
import List from "../components/List.jsx";

function HomePage({ functionData, handleDelete }) {
  return (
    <section className="mainContent">
    <div className="h1div">
      <h1>My recipes</h1>
      <Link to="/add-recipe">
        <button type="button">Add Recipe</button>
      </Link>
    </div>
    <div className="recipeList">
    <List functionData={functionData} handleDelete={handleDelete} />
    </div>
    </section>
  );
}

export default HomePage;
