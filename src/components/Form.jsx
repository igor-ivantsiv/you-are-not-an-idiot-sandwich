import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Form({ functionData, setFunctionData, formType, recipeId }) {
  const navigate = useNavigate();

  if (formType === "add") {
    const initNewRecipe = {
      id: uuidv4(),
      name: "",
      calories: 0,
      image: "", 
      servings: 1,
    };

    const [newRecipe, setNewRecipe] = useState(initNewRecipe);

    const handleChange = (event) => {
      const currentName = event.target.name;
      const currentValue = event.target.value;
      setNewRecipe({ ...newRecipe, [currentName]: currentValue });
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      setFunctionData([newRecipe, ...functionData]);

      setNewRecipe(initNewRecipe);

      navigate("/");
    };
    return (
      <form onSubmit={handleSubmit} >
        <div className="addCard">
          <label>
            Recipe name
            <input
              name="name"
              type="text"
              placeholder="Recipe name"
              value={newRecipe.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Calories
            <input
              name="calories"
              type="text"
              placeholder="Calories"
              value={newRecipe.calories}
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
              value={newRecipe.servings}
              onChange={handleChange}
            />
          </label>

          <label>
            Image
            <input
              name="image"
              type="url"
              placeholder="Image"
              value={newRecipe.image}
              onChange={handleChange}
            />
          </label>

          {/*<label>
              Upload Image
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>*/}

<div className="formButtons">
<button type="submit" className="submitButton">Add a Recipe</button>
<Link to="/">
<button type="button">Back</button>
</Link>
</div>
        </div>
      </form>
    );
  } else if (formType === "edit") {
    const currentRecipe = functionData.filter(
      (currentRecipe) => currentRecipe.id === recipeId
    )[0];

    const [updatedRecipe, setUpdatedRecipe] = useState(currentRecipe);

    const handleSubmit = (event) => {
      event.preventDefault();

      const updatedData = functionData.map((recipe) =>
        recipe.id === currentRecipe.id ? updatedRecipe : recipe
      );
      setFunctionData(updatedData);

      setUpdatedRecipe(currentRecipe);

      navigate(`/recipes/${currentRecipe.id}`);
    };

    const handleChange = (event) => {
      const currentName = event.target.name;
      const currentValue = event.target.value;
      setUpdatedRecipe({ ...updatedRecipe, [currentName]: currentValue });
    };
    return (
      <form onSubmit={handleSubmit} >
        <div className="addCard">
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
<div className="formButtons">
<button type="submit" className="submitButton">Update Recipe</button>
<Link to={`/recipes/${currentRecipe.id}`}>
<button type="button">Back</button>
</Link>

</div>

        </div>
      </form>
    );
  }
}

export default Form;
