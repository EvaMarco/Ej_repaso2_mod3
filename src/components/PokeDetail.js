import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PokeDetail = props => {
  const {routerProps, pokemones}= props;
  const pokeId = parseInt(routerProps.match.params.pokeId); 
  const pokemon = pokemones.filter(item => item.id === pokeId);
  if(pokeId > pokemones.length){
    return(
      <div className="ojo">
        <p>No te pases de listo.</p>
        <Link to="/" className="app__back">
        Volver
      </Link>
      </div>
    )
  }
  
  if(pokemon[0]){

    const {name, url, types}= pokemon[0];
  return (

    <Fragment>
      <Link to="/" className="app__back">
        Volver
      </Link>
      <div className="detail">
        <h2>
        Soy el detalle de {name}
        </h2>
        <div className="detail__image">
          <img src={url} alt={name}/>
        </div>
        <ul className="type__list">
         {types.map( 
           (item, index) => {
             return(
               <li key = {index}>
                 {item}
               </li>
             )
           }
         )} 
        </ul>
        </div>
    </Fragment>
  )}
  else{
    return(
      <Fragment>
      <Link to="/" className="app__back">
        Volver al listado
      </Link>
      <p>Ese pokemon no lo tenemos.</p>
      </Fragment>
    )

  }
}

PokeDetail.porpTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.objects).isRequired,
  routerProps: PropTypes.object.isRequired
}
export default PokeDetail;