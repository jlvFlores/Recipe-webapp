import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setLoading, setRecipe } from '../redux/details/detailsSlice';
import { setPage, setIsSelected, setSearch } from '../redux/navbar/navbarSlice';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { recipes } = useSelector((store) => store.recipes);
  const { recipe, isLoading } = useSelector((store) => store.details);

  useEffect(() => {
    dispatch(setRecipe(recipes.find((recipe) => recipe.key === id)));
    dispatch(setPage(recipe.label));
    dispatch(setIsSelected(false));
    dispatch(setSearch(''));
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
          <p>{`${recipe.ingredients.length} ingredients`}</p>
        </div>
      </div>
      <div className="divider">
        See full recipe
        <a href={recipe.url} target="_blank" rel="noreferrer noopener"> HERE.</a>
      </div>
      <div className="recipe-cont">
        <div className="recipe-div">
          <p>Calories</p>
          <p>{`${recipe.calories.toFixed(2)} kcal`}</p>
        </div>
        <div className="recipe-div">
          <p>Ingredients</p>
          <p>{recipe.ingredients.length}</p>
        </div>
        <div className="recipe-div">
          <p>Total nutrients</p>
          <p>{recipe.totalNutrients.length}</p>
        </div>
        <div className="recipe-div">
          <p>Diet labels</p>
          <p>{recipe.dietLabels.length}</p>
        </div>
        <div className="recipe-div">
          <p>Health labels</p>
          <p>{recipe.healthLabels.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
