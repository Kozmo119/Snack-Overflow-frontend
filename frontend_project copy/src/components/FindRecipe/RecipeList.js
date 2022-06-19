import Recipe from "./Recipe";

const RecipeList = ({recipes}) => {
  const recipesComponents = recipes.map((recipe) => {
    return <Recipe key={recipe.id} recipe={recipe} />
  });

  return(
      <>
      <hr />
   { recipesComponents }
   </>
  );
};

export default RecipeList;
