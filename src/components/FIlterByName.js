import React from 'react';
import PropTypes from 'prop-types';

const FilterByName = (props) => {
  const handleFilter = (ev) => {
    console.log(ev.target.value);
    props.handleFilter({
      value: ev.target.value,
    });
  };

  return <input type='text' name='name' id='name' placeholder='busca tu personaje favorito' onChange={handleFilter} />;
};

export default FilterByName;

FilterByName.propTypes = {
  handleFilter: PropTypes.func,
};
