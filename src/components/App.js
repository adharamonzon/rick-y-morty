import React from 'react';
import getDataFromApi from '../service/api';
import List from './List';
import '../stylesheets/App.css';

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

    return <List info={this.state} />;
  }
}

export default App;
