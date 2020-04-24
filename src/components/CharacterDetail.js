import React from 'react';
import PropTypes from 'prop-types';
import DeadIcon from '../stylesheets/images/skull-solid.svg';
import HumanIcon from '../stylesheets/images/male-solid.svg';
import AlienIcon from '../stylesheets/images/extraterrestre.png';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to='/'>
        <p>volver</p>
      </Link>
      <img className='img' src={props.selectedCharacter.image} alt={`foto de ${props.selectedCharacter.name}`} />
      <div className='text-container'>
        <h3 className='espices'> Especie:{props.selectedCharacter.species === 'Human' ? <img className='icon' src={HumanIcon} alt='Humano' /> : <img className='icon' src={AlienIcon} alt='Humano' />}</h3>
        <p>Origen: {props.selectedCharacter.origin} </p>
        <p>Estado: {props.selectedCharacter.status === 'Dead' ? <img className='icon' src={DeadIcon} alt='icono de personaje muerto' /> : 'vivo'} </p>
        <p>Episodios: {props.selectedCharacter.episodes.length}</p>
      </div>
    </div>
  );
};
export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.object,
};
