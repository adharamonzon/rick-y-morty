import React from 'react';
import getDataFromApi from '../service/api';
import List from './List';
import Logo from '../stylesheets/images/rickandmorty.png';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  getDataFromApi() {
    getDataFromApi().then((data) => {
      console.log(data);

      this.setState({
        characters: data,
      });
    });
  }
  componentDidMount() {
    this.getDataFromApi();
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <img className='logo' src={Logo} alt='rick and morty logo' />

        <List info={this.state} />
      </div>
    );
  }
}

export default App;
