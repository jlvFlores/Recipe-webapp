import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

const Home = () => {
  const { recipes, isLoading } = useSelector((store) => store.recipes);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading recipes...</p>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="card">
        You can search recipes by the type of diet that you prefer.
        <div className="divider">Number of ingredients required</div>
      </div>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.key}
          id={recipe.key}
          name={recipe.label}
          image={recipe.images.SMALL.url}
          ingredientsCount={recipe.ingredientLines.length}
        />
      ))}
    </div>
  );
};

export default Home;
