import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditRecipe({ functionData, setFunctionData }) {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const currentRecipe = functionData.filter(
    (currentRecipe) => currentRecipe.id === recipeId
  )[0];

  const [updatedRecipe, setUpdatedRecipe] = useState(currentRecipe);

  const handleChange = (event) => {
    const currentName = event.target.name;
    const currentValue = event.target.value;
    setUpdatedRecipe({ ...updatedRecipe, [currentName]: currentValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedData = functionData.map((recipe) =>
      recipe.id === currentRecipe.id 
    ? updatedRecipe 
    : recipe
    );
    setFunctionData(updatedData);

    setUpdatedRecipe(currentRecipe);

    navigate(`/recipes/${currentRecipe.id}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Recipe</span>
      <div>
        <label>
          Recipe name
          <input
            name="name"
            type="text"
            placeholder="Recipe name"
            value={updatedRecipe.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Calories
          <input
            name="calories"
            type="text"
            placeholder="Calories"
            value={updatedRecipe.calories}
            onChange={handleChange}
          />
        </label>

        <label>
          Servings
          <input
            name="servings"
            type="number"
            minLength={1}
            maxLength={2}
            min={1}
            max={20}
            value={updatedRecipe.servings}
            onChange={handleChange}
          />
        </label>

        <label>
          Image
          <input
            name="image"
            type="url"
            placeholder="Image"
            value={updatedRecipe.image}
            onChange={handleChange}
          />
        </label>

        {/*<label>
              Upload Image
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>*/}

        <button type="submit">Update Recipe</button>
      </div>
    </form>
  );
}

export default EditRecipe;
