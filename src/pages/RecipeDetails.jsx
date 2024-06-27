import { useParams } from "react-router-dom";
import recipesData from "../assets/recipes.json";

function recipeDetails(){

    const { recipeId } = useParams()

    const currentRecipe = recipesData.filter(currentRecipe => currentRecipe.id === recipeId)[0]

    return <>
    <h1>{currentRecipe.name}</h1>
    </>
}

export default recipeDetails