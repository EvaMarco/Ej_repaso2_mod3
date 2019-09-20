import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';
import {Link} from 'react-router-dom';
// Hacemos esta función funcional porque no tiene métodos
const PokeList = props => {
  const {pokemones, query} = props;
  return (
      <ol className="pokeList">
        {pokemones
          .filter(myPokemon => myPokemon.name.toUpperCase().includes(query.toUpperCase()))
          .map(pokemon => {
            return(
              <li key={pokemon.id}>
                <Link to = {`/poke-detail/${pokemon.id}`} className = "Pokemon-detail">
                <PokeCard
                name = {pokemon.name} 
                url = {pokemon.url}
                />
                </Link>
              </li>
            )
          })
        }
      </ol>
  );
}

PokeList.propTypes = {
  pokemones : PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired
}
export default PokeList;