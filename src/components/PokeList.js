import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';
// Hacemos esta función funcional porque no tiene métodos
const PokeList = props => {
  const {pokemones} = props;
  return (
      <ol className="pokeList">
        {pokemones.map(pokemon => {
          return(
            <li key={pokemon.id}>
              <PokeCard
              name = {pokemon.name} 
              url = {pokemon.url}
              />
            </li>
          )
        })
        }
      </ol>
  );
}

PokeList.propTypes = {
  pokemones : PropTypes.arrayOf(PropTypes.object).isRequired
}
export default PokeList;