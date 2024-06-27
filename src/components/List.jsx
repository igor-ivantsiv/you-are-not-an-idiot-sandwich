import recipesData from "../assets/recipes.json";
import ListItem from "./ListItem.jsx";
import { useState } from "react";

function List() {
  const [functionData, setFunctionData] = useState(recipesData);

  const handleDelete = (recipeId) => {
    console.log(recipeId);
    const filteredData = functionData.filter(
      (currentRecipe) => currentRecipe.id !== recipeId
    );
    console.log(filteredData);
    setFunctionData(filteredData);
  };

  return functionData.map((eachRecipe) => {
    return (
      <ListItem
        key={eachRecipe.id}
        recipe={eachRecipe}
        handleDelete={handleDelete}
      />
    );
  });
}
export default List;
