import React from 'react';
import ItemList from './ItemList';

const List = (props) => {
  console.log(props.info.characters);
  const items = props.info.characters.map((item) => {
    return (
      <li className='list' key={item.id}>
        <ItemList info={item} />
      </li>
    );
  });
  return <ul>{items}</ul>;
};
export default List;
