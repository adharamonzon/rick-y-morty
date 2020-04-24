import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

const CharacterList = ({ characters }) => {
  /*   if (characters > 0) { */
  const items = characters.map((item) => {
    return (
      <li className='itemList' key={item.id}>
        <CharacterCard character={item} />
      </li>
    );
  });
  return <ul className='list'>{items}</ul>;
}; /* else {
    return <p>holi</p>;
  } */
/* }; */
export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array,
};
