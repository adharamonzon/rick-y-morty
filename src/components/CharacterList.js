import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  const items = props.characters.map((item) => {
    return (
      <li className='itemList' key={item.id}>
        <CharacterCard character={item} />
      </li>
    );
  });
  return <ul className='list'>{items}</ul>;
};
export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array,
};
