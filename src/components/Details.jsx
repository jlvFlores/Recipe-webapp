import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setLoading, setPage, setRecipe } from '../redux/details/detailsSlice';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { recipes } = useSelector((store) => store.recipes);
  const { recipe, isLoading } = useSelector((store) => store.details);

  useEffect(() => {
    dispatch(setRecipe(recipes.find((recipe) => recipe.key === id)));
    dispatch(setPage(recipe.label));
    dispatch(setLoading(false));
  }, [dispatch, id, recipes, recipe.label]);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading details...</p>
      </div>
    );
  }

  return (
    <div className="details">
      <div className="headline">
        <img className="recipe-img" src={recipe.images.SMALL.url} alt={recipe.label} />
        <div className="text-group">
          <p>{recipe.label}</p>
          <p>{recipe.ingredients.length}</p>
        </div>
      </div>
      <div className="divider">FULL RECIPE BELOW</div>
      <div className="recipe-cont">
        <div>
          <div className="recipe-div recipe-url">
            <h3>
              See full recipe
              <a href={recipe.url}> HERE.</a>
            </h3>
          </div>
          <div className="recipe-div recipe-ingredients">
            <h3>Ingredients</h3>
            {recipe.ingredients.map((ingred) => <p key={ingred.foodId}>{ingred.text}</p>)}
          </div>
        </div>
        <div className="recipe-nutrition">
          <h3>Nutrition</h3>
          {recipe.totalNutrients.map((nutrient) => <p key={nutrient.label}>{`${nutrient.label}: ${nutrient.quantity.toFixed(2)}${nutrient.unit}`}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Details;
