import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  console.log(props.character);

  return (
    <div>
      <img className='img' src={props.character.image} alt={`foto de ${props.character.name}`} />
      <div className='text-container'>
        <h1 className='title'>{props.character.name}</h1>
        <h3 className='espices'>Especie:{props.character.species}</h3>
        <p>origen: {props.character.origin} </p>
        <p>Estado: {props.character.status} </p>
        <p>episodios: {props.character.episodes}</p>
      </div>
    </div>
  );
};
export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.object,
};
