import React from 'react';
import PropTypes from 'prop-types';

const ItemList = (props) => {
  return (
    <>
      <div className='text-container'>
        <h1 className='title'>{props.info.name}</h1>
        <h3 className='espices'>{props.info.species}</h3>
      </div>
      <img className='img' src={props.info.image} alt={`foto de ${props.info.name}`} />
    </>
  );
};
export default ItemList;

ItemList.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
};
