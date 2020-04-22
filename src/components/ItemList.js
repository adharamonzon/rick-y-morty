import React from 'react';

const ItemList = (props) => {
  console.log(props);

  return (
    <>
      <h1>{props.info.name}</h1>
      <h3>{props.info.specie}</h3>
      <img src={props.info.image} alt={`foto de ${props.info.name}`} />
    </>
  );
};
export default ItemList;
