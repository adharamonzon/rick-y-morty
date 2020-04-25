import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../stylesheets/images/rickandmorty.png';

const FilterByName = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter({
      value: ev.target.value,
    });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <header className='header'>
      <div>
        <img className='header--logo' src={Logo} alt='rick and morty logo' />
      </div>
      <form className='header--form' onSubmit={handleForm}>
        <label htmlFor='name'>¡Busca a tu personaje favorito!</label>
        <input className='header--form__input' type='text' value={props.inputValue} name='name' id='name' placeholder=' escribe aqui...' onChange={handleFilter} />
      </form>
    </header>
  );
};

export default FilterByName;

FilterByName.propTypes = {
  handleFilter: PropTypes.func,
};
