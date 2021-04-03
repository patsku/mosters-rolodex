import React,{Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      serarchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChange = (e) => {
    this.setState({serarchField: e.target.value})
  }


  render() {
    const {monsters,serarchField} = this.state;

    const filteredMosters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(serarchField.toLowerCase())
    );


  return (
    <div className="App">
    <h1> Monsters Rolodex </h1>
    <SearchBox 
      placeholder='Search Monster' 
      handleChange={this.handleChange  } 
    />
    <CardList monsters={filteredMosters} />
    </div>
  );
  }

}
export default App;
