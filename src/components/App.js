import React from 'react';
import getDataFromApi from '../service/api';
import List from './List';
import Logo from '../stylesheets/images/rickandmorty.png';
import FilterByName from './FIlterByName';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      nameFilter: '',
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.filteredCharacters = this.filteredCharacters.bind(this);
  }

  //traer los datos de la api
  getDataFromApi() {
    getDataFromApi().then((data) => {
      this.setState({
        characters: data,
      });
    });
  }
  componentDidMount() {
    this.getDataFromApi();
  }

  //manejar el filtro
  handleFilter(data) {
    this.setState({ nameFilter: data.value });
  }

  filteredCharacters() {
    return this.state.characters.filter((character) => {
      return character.name.toUpperCase().includes(this.state.nameFilter.toLocaleUpperCase());
    });
  }

  render() {
    console.log(this.filteredCharacters());
    return (
      <div>
        <img className='logo' src={Logo} alt='rick and morty logo' />
        <FilterByName handleFilter={this.handleFilter} />
        <List characters={this.filteredCharacters()} />
      </div>
    );
  }
}

export default App;
