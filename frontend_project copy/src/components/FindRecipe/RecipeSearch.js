import { useState } from "react";

const RecipeSearch = ({recipes}) => {
  const [query, setQuery] = useState("");

  const inputHandler = (event) => {
    setQuery(event.target.value);
  }; 

  const checker = recipes.filter(recipe => {
      if (query === "") {
        return recipe
      } else if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
        return recipe
    }      
}).map(recipe => {
    return (    
        <div key={recipe.id}>
            <h1>{recipe.name}</h1>
        </div>
    );
})
   
  return (
    <div>
      <input type="text" placeholder="Pizza" onChange={inputHandler}/>
      {checker}
    </div>
  );
}

export default RecipeSearch;
