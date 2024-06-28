import { useParams } from "react-router-dom";

function recipeDetails( {functionData} ){

    const { recipeId } = useParams()

    const currentRecipe = functionData.filter(currentRecipe => currentRecipe.id === recipeId)[0]

    return <>
    <h1>{currentRecipe.name}</h1>
    </>
}

export default recipeDetails