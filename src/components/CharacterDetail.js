import React from 'react';
import PropTypes from 'prop-types';
import DeadIcon from '../stylesheets/images/skull-solid.svg';
import HumanIcon from '../stylesheets/images/male-solid.svg';
import AlienIcon from '../stylesheets/images/alien.png';
import hole from '../stylesheets/images/portal.png';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <article className='detail'>
      <div className='detail--img-container'>
        <img className='detail--image' src={hole} alt='agujero verde' />
      </div>
      <div className='detailCard'>
        <Link className='detailCard--back' to='/'>
          <p className='detailCard--back__text'>volver</p>
        </Link>
        <img className='detailCard--img' src={props.selectedCharacter.image} alt={`foto de ${props.selectedCharacter.name}`} />
        <div className='detailCard--textContainer'>
          <p className='detailCard--textContainer__espices'> Especie:{props.selectedCharacter.species === 'Human' ? <img className='icon-specie' src={HumanIcon} alt='Humano' /> : <img className='icon-specie' src={AlienIcon} alt='Humano' />}</p>
          <p className='detailCard--textContainer__origen'>Origen: {props.selectedCharacter.origin} </p>
          <p className='detailCard--textContainer__status'>Estado: {props.selectedCharacter.status === 'Dead' ? <img className='icon-dead' src={DeadIcon} alt='icono de personaje muerto' /> : <span className='alive'>vivo</span>} </p>
          <p className='detailCard--textContainer__episodes'>Episodios: {props.selectedCharacter.episodes.length}</p>
        </div>
      </div>
    </article>
  );
};
export default CharacterDetail;

CharacterDetail.propTypes = {
  selectedCharacter: PropTypes.object,
};
