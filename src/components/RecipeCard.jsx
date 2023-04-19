import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import arrowCircle from '../assets/img/arrow-circle.svg';

const RecipeCard = ({
  id, name, image, ingredientsCount,
}) => (
  <div className="card">
    <div className="image-cont">
      <NavLink className="navlink" to={`/details/${id}`}>
        <img className="go-details-icon" src={arrowCircle} alt="see details" />
      </NavLink>
      <img className="recipe-img" src={image} alt={name} />
    </div>
    <div className="text-group">
      <p className="recipe-name">{name}</p>
      <p className="ingredients-count">{ingredientsCount}</p>
    </div>
  </div>
);

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredientsCount: PropTypes.number.isRequired,
};

export default RecipeCard;
