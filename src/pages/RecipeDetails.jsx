import { Link, useParams } from "react-router-dom";

function recipeDetails( {functionData} ){

    const { recipeId } = useParams()

    const currentRecipe = functionData.filter(currentRecipe => currentRecipe.id === recipeId)[0]

    return <>
    <h1>{currentRecipe.name}</h1>
    <Link to={`/recipes/${currentRecipe.id}/edit`}>
    <button type="button">Edit</button>
    </Link>
    </>
}

export default recipeDetails