import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  console.log(props);

  if (props.characters.length > 0) {
    const items = props.characters.map((item) => {
      return (
        <li className='itemList' key={item.id}>
          <CharacterCard character={item} />
        </li>
      );
    });
    return <ul className='list'>{items}</ul>;
  } else {
    return <p>No hay ningún personaje que coincida con la palabra: {props.inputValue}</p>;
  }
};
export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array,
};
