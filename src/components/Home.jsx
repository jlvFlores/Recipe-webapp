import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';
import recipeLogo from '../assets/img/recipe.svg';

const Home = () => {
  const { recipes, isLoading } = useSelector((store) => store.recipes);
  const { search } = useSelector((store) => store.navbar);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading recipes...</p>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="headline">
        <img className="logo" src={recipeLogo} alt="logo" />
        <p className="headline-text">Here is a list of the 20 best recipes for you to enjoy</p>
      </div>
      <div className="divider">Number of ingredients required</div>
      {recipes.filter((recipe) => (search.toLowerCase() === '' ? recipe : recipe.label.toLowerCase().includes(search))).map((recipe) => (
        <RecipeCard
          key={recipe.key}
          id={recipe.key}
          name={recipe.label}
          image={recipe.images.SMALL.url}
          ingredientsCount={recipe.ingredients.length}
        />
      ))}
    </div>
  );
};

export default Home;
