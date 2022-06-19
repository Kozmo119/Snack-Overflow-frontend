import RecipeList from "./RecipeList";
import { useState, useEffect } from "react";
import RecipeSearch from "./RecipeSearch";

const RecipeListContainer = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <>
      <RecipeSearch recipes={recipes}/>
      <RecipeList recipes={recipes} />
    </>
  );
};

export default RecipeListContainer;
