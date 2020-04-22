import React from 'react';
import PropTypes from 'prop-types';

const FilterByName = (props) => {
  const handleFilter = (ev) => {
    console.log(ev.target.value);
    props.handleFilter(ev.target.value);
  };

  return <input type='text' placeholder='busca tu personaje favorito' onChange={handleFilter} />;
};

export default FilterByName;

FilterByName.propTypes = {
  handleFilter: PropTypes.func,
};
