import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { recipes } = useSelector((store) => store.recipes);
  const { id } = useParams();

  let recipe = null;

  recipe = recipes.find((recipe) => recipe.key !== id);
  console.log(recipe);

  return (
    <div className="details">
      {recipe.label}
    </div>
  );
};

export default Details;
