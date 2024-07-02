import { Link, useParams } from "react-router-dom";

function recipeDetails({ functionData }) {
  const { recipeId } = useParams();

  const currentRecipe = functionData.filter(
    (currentRecipe) => currentRecipe.id === recipeId
  )[0];

  return (
    <section className="mainContent">
      <div className="h1div">
        <h1>{currentRecipe.name}</h1>
        <Link to={`/recipes/${currentRecipe.id}/edit`}>
          <button type="button">Edit</button>
        </Link>
      </div>
      <div className="recipeCard">
        <img
          className="recipeImage"
          src={currentRecipe.image}
          alt={`${currentRecipe.name} image`}
        />
        <div className="cardContent">
          <h2>{currentRecipe.name}</h2>
          <p>
            <strong>Calories: </strong>
            {currentRecipe.calories}
          </p>
          <p>
            <strong>Servings: </strong>
            {currentRecipe.servings}
          </p>
      </div>
      </div>
    </section>
  );
}

export default recipeDetails;
