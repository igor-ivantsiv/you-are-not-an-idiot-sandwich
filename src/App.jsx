import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
// import recipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";

function App() { 
  return (
    <>
      <div className="pages">
        <Navbar />
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/*<Route path="/recipes/:recipeId" element={<recipeDetails />} />*/}
          <Route path="/about" element={<About />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipes/:recipeId/edit" element={<EditRecipe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
