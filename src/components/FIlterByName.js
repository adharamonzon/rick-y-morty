import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

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
  console.log(props.value);

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

/* if (ev.target.value !== '') {
  
} else {
  props.handleFilter({
    value: ev.target.value,
  });
} */
