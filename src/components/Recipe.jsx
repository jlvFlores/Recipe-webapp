import PropTypes from 'prop-types';
import React from 'react';

const Recipe = ({ name, ingredients }) => (
  <div className="card">
    <h3>{name}</h3>
    <p>{`This recipe requires only ${ingredients.length} ingredients`}</p>
  </div>
);

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.instanceOf(Array).isRequired,
};

export default Recipe;
