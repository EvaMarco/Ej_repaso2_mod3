import React, {Fragment} from 'react';
import PokeList from './PokeList';
import Filters from './Filters';
import PropTypes from 'prop-types';

const Home = props => {
  const {getUserQuery, query, pokemones} = props;
  return (
    <Fragment>
      <Filters
        getUserQuery= {getUserQuery}
        query = {query}
      />
      <PokeList 
        pokemones = {pokemones}
        query = {query}
      />
    </Fragment>
  )
}

Home.porpTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.objects).isRequired,
  query: PropTypes.string.isRequired,
  getUserQuery: PropTypes.func.isRequired
}
export default Home;
