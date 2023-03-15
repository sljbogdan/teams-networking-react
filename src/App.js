import { Component } from 'react';
import './App.css';
import { TeamsTable } from "./TeamsTable";


class App extends Component{
constructor(props) {
  super(props);
  this.state = {
    teams: []
  }
}

componentDidMount() {
  console.warn('mount');
  setTimeout(()=>{
    console.warn("loaded");
    this.setState({
      teams: [
        {
          "name": "CV",
          "members": "Salajan Bogdan",
          "url": "https://github.com/sljbogdan",
        },
        {
          "name": "CV",
          "members": "Bonat Paula",
          "url": ""
        }
      ]
    })
  }, 2000)
  
}

  render (){
    console.debug(this.state.teams);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <TeamsTable teams={this.state.teams} border={2}/>
      </div>
    );
  }
}

export default App;
