import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails";
import About from "./pages/About";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";

import recipesData from "./assets/recipes.json";

function App() {
  const [functionData, setFunctionData] = useState(recipesData);

  const handleDelete = (recipeId) => {
    const filteredData = functionData.filter(
      (currentRecipe) => currentRecipe.id !== recipeId
    );
    setFunctionData(filteredData);
  };

  return (
    <>
      <div className="pages">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                functionData={functionData}
                handleDelete={handleDelete}
              />
            }
          />
          <Route path="/recipes/:recipeId" element={<RecipeDetails functionData={functionData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-recipe" element={<AddRecipe functionData={functionData} setFunctionData={setFunctionData}/>} />
          <Route path="/recipes/:recipeId/edit" element={<EditRecipe functionData={functionData} setFunctionData={setFunctionData} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
