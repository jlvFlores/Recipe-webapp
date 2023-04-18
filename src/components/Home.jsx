import React from 'react';
import { useSelector } from 'react-redux';
import Recipe from './Recipe';

const Home = () => {
  const { recipes, isLoading } = useSelector((store) => store.recipes);

  if (isLoading) {
    return (
      <div className="home">
        <div className="card">
          Loading random recipes...
          <div className="divider">Diets</div>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="card">
        You can search recipes by the type of diet that you prefer.
        <div className="divider">Diets</div>
      </div>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.key}
          name={recipe.label}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default Home;
