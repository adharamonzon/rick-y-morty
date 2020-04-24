import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = (props) => {
  console.log(props.selectedCharacter);
  debugger;

  return (
    <div>
      <img className='img' src={props.selectedCharacter.image} alt={`foto de ${props.selectedCharacter.name}`} />
      <div className='text-container'>
        <h3 className='espices'>Especie:{props.selectedCharacter.species}</h3>
        <p>origen: {props.selectedCharacter.origin} </p>
        <p>Estado: {props.selectedCharacter.status} </p>
        <p>episodios: {props.selectedCharacter.episodes}</p>
      </div>
    </div>
  );
};
export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.object,
};
