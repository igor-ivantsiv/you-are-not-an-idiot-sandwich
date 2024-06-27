import recipesData from "../assets/recipes.json";
import ListItem from "./ListItem.jsx";

function List() {

    return (

    recipes.map((eachRecipe)=>{
      return <ListItem key ={eachRecipe.id} recipe={ eachRecipe } />
    })

)}
export default List; 