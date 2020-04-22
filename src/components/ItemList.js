import React from 'react';

const ItemList = (props) => {
  console.log(props);

  return (
    <>
      <div className='text-container'>
        <h1 className='title'>{props.info.name}</h1>
        <h3 className='espices'>{props.info.specie}</h3>
      </div>
      <img className='img' src={props.info.image} alt={`foto de ${props.info.name}`} />
    </>
  );
};
export default ItemList;
