import React from 'react';
import PropTypes from 'prop-types';

const FilterByName = (props) => {
  console.log(props);

  const handleFilter = (ev) => {
    props.handleFilter({
      value: ev.target.value,
    });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleForm}>
      <input type='text' value={props.inputValue} name='name' id='name' placeholder='busca tu personaje favorito' onChange={handleFilter} />
    </form>
  );
};

export default FilterByName;

FilterByName.propTypes = {
  handleFilter: PropTypes.func,
};
