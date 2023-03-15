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
    this.load();
  }

 load(){
    fetch("http://localhost:3000/teams-json")
        .then(r => r.json())
        .then(teams => {
            this.setState({
              teams
            });
        });
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
