import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    this.renderAlphabetically = this.renderAlphabetically.bind(this);
  }

  //trae los datos de la api (datos ya limpios)
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

  //manejar el filtro por nombre
  handleFilter(data) {
    this.setState({ nameFilter: data.value });
  }

  filteredCharacters() {
    return this.state.characters.filter((character) => {
      return character.name.toUpperCase().includes(this.state.nameFilter.toUpperCase());
    });
  }
  //pintar el detalle del personaje clicado
  renderCharacterDetail(props) {
    let selectedCharacter = this.state.characters.find((character) => {
      return character.id === parseInt(props.match.params.id);
    });
    if (selectedCharacter !== undefined) {
      return <CharacterDetail selectedCharacter={selectedCharacter} inputValue={this.state.nameFilter} />;
    }
  }
  //pintar alfabéticamente (al hacer una búsqueda)
  renderAlphabetically() {
    return this.state.characters.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <FilterByName handleFilter={this.handleFilter} inputValue={this.state.nameFilter} />
            <CharacterList characters={this.filteredCharacters()} sort={this.renderAlphabetically()} inputValue={this.state.nameFilter} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
