import recipesData from "../assets/recipes.json";
import { useState } from "react";

function ListItem({ recipe }) {


    const [recipes, setRecipes] = useState(recipesData)

    const handleDelete = (id) => {
      setRecipes(recipes.filter(currentRecipe => currentRecipe.id === id))
    }

    return <> 
    <div className="recipeCard" key ={recipe.id} id = {recipe.id}>
        <img className="recipeImage" src={recipe.image} alt={`${recipe.name} image`} />
        <div className="cardContent">
        <h2>{recipe.name}</h2>
        <p><strong>Calories: </strong>{recipe.calories}</p>
        <p><strong>Servings: </strong>{recipe.servings}</p>
        <button type="button" className="detailButton">Details</button>
        <button type="button" className="deleteButton" onClick={()=>handleDelete(recipe.id)}>Delete</button>
        </div>
    </div>
</>;
}

export default ListItem