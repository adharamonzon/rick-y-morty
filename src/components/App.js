import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from '../stylesheets/images/rickandmorty.png';
import getDataFromApi from '../service/api';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
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
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
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

  renderCharacterDetail(props) {
    let selectedCharacter = this.state.characters.find((character) => {
      return character.id === parseInt(props.match.params.id);
    });
    console.log(selectedCharacter);
    return <CharacterDetail selectedCharacter={selectedCharacter} inputValue={this.state.nameFilter} />;
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <img className='logo' src={Logo} alt='rick and morty logo' />

        <Switch>
          <Route exact path='/'>
            <FilterByName handleFilter={this.handleFilter} inputValue={this.state.nameFilter} />
            <CharacterList characters={this.filteredCharacters()} inputValue={this.state.nameFilter} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
