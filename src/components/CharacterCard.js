import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  return (
    <div>
      <div className='text-container'>
        <h1 className='title'>{props.character.name}</h1>
        <h3 className='espices'>{props.character.species}</h3>
      </div>
      <img className='img' src={props.character.image} alt={`foto de ${props.character.name}`} />
    </div>
  );
};
export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.object,
};
