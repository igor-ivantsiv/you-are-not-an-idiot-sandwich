import { Link } from "react-router-dom";

function ListItem({ recipe, handleDelete }) {
  return (
    <>
      <div className="recipeCard" key={recipe.id} id={recipe.id}>
        <img
          className="recipeImage"
          src={recipe.image}
          alt={`${recipe.name} image`}
        />
        <div className="cardContent">
          <h2>{recipe.name}</h2>
          <p>
            <strong>Calories: </strong>
            {recipe.calories}
          </p>
          <p>
            <strong>Servings: </strong>
            {recipe.servings}
          </p>
          <div className="buttonsDiv">
            <Link to={`/recipes/${recipe.id}`}>
              <button type="button" className="detailButton">
                Details
              </button>
            </Link>
            <button
              type="button"
              className="deleteButton"
              onClick={() => handleDelete(recipe.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItem;
