import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <div>
      <Link to={`/character/${props.character.id}`}>
        <img className='img' src={props.character.image} alt={`foto de ${props.character.name}`} />
        <div className='text-container'>
          <h1 className='title'>{props.character.name}</h1>
          <h3 className='espices'>{props.character.species}</h3>
        </div>
      </Link>
    </div>
  );
};
export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.object,
};
