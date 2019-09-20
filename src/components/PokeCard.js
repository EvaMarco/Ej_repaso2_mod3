import React from 'react';
import PropTypes from 'prop-types';

// Hacemos esta función funcional porque no tiene métodos
const PokeCard = props => {
  const {name, url} = props;
  return (
    <div className="card">
      <h2 className="card__name">{name}</h2>
      <div className="card__image">
        <img className="pokemon_image" src={url} alt={`Foto de ${name}`}/>
      </div>
    </div>
  );
}

PokeCard.propTypes = {
  name : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired
}
export default PokeCard;