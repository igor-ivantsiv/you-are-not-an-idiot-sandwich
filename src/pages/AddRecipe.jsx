import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

function AddRecipe({ functionData, setFunctionData }) {
const navigate = useNavigate()


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

    navigate("/")

  };

  /*function handleImageChange(event) {
    const file = event.target.files[0];
  }*/
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

        <button type="submit">Add Recipe</button>
      </div>
    </form>
  );
}

export default AddRecipe;
