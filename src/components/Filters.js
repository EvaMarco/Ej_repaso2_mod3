import React from 'react';
import PropTypes from 'prop-types';

// Hacemos esta función funcional porque no tiene métodos
const Filters = props => {
  const {getUserQuery, query} = props;
  return (
    <div className="app__filters">
      <label htmlFor="name">Introduce tu nombre</label>
      <input 
        id = "name" 
        type="text" 
        onChange={getUserQuery} 
        value={query} 
      />
    </div>
  )
}

Filters.propTypes = {
  query : PropTypes.string.isRequired,
  getUserQuery : PropTypes.func.isRequired
}
export default Filters;