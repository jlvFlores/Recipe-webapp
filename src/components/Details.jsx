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
      <div className="header-cont">
        <img src={recipe.images.SMALL.url} alt={recipe.label} />
        <div>
          <h4 className="recipe-name">{recipe.label}</h4>
          <p className="ingredients-count">{recipe.ingredientLines.length}</p>
        </div>
      </div>
      <div className="details-divider">FULL RECIPE BELOW</div>
      <div className="recipe-cont">
        <div className="recipe-ingredients">
          <h3>Ingredients</h3>
          {recipe.ingredients.map((ingredient) => <p key={ingredient.foodId}>{ingredient.text}</p>)}
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
