import recipesData from "../assets/recipes.json";
import React, { useState } from "react";

function List() {
  const [functionData, setFunctionData] = useState(recipesData);
  return functionData.map((eachRecipe) => {
    return <> 
    <div className="recipeCard" key ={eachRecipe.id} id = {eachRecipe.id}>
        <img src={eachRecipe.image} alt={`${eachRecipe.name} image`} />
        <h3>{eachRecipe.name}</h3>
        <p>{eachRecipe.calories}</p>
        <p>{eachRecipe.servings}</p>
        <button type="button" className="detailButton">Details</button>
        <button type="button" className="deleteButton">Delete</button>
    </div>
</>;
  });
}

export default List;
