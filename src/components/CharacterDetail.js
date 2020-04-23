import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  console.log(props.characters);

  return (
    <div>
      <img className='img' src={props.characters.image} alt={`foto de ${props.characters.name}`} />
      <div className='text-container'>
        <h1 className='title'>{props.characters.name}</h1>
        <h3 className='espices'>Especie: {props.characters.species}</h3>
        <p>origen: </p>
        <p>episodios:</p>
      </div>
    </div>
  );
};
export default CharacterDetail;
/*  CharacterDetail.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
}; */
