import recipesData from "../assets/recipes.json";
import React, { useState } from "react";
import ListItem from "./ListItem.jsx";

function List() {
    return  recipesData.map((eachRecipe)=>{
      return<>
      <ListItem key ={eachRecipe.id} recipe={ eachRecipe } />
      </>
    })

}

export default List; 