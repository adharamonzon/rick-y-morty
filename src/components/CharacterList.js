import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  console.log(props.characters);

  /*  const alphabetically = props.characters.name.sort((a, b) => {
    a < b ? 1 : -1;
  }); */
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
    return (
      <p className='error-message'>
        No hay ningún personaje que coincida con la palabra: <span className='error'>{props.inputValue}</span>
      </p>
    );
  }
};
export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array,
};
