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

  add(team){
    console.warn("values", team);
    document.querySelector('form').reset();

      fetch("http://localhost:3000/teams-json/create", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(team)
      })
          .then(res => res.json())
          .then(r => {
              if(r.success){
                 team.id = r.id;
                 const teams = this.state.teams.concat(team);
                 this.setState({
                  teams
                 });
              }
           });
  }

  delete(id){
    fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
    })
        .then(r => r.json())
        .then(status => {
            this.load();
        });
}



  render (){
    console.debug(this.state.teams);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <TeamsTable 
          teams={this.state.teams} 
          border={2} 
          onSubmit={team => {
              this.add(team);
           }}
           onDelete = {id => {
              this.delete(id);
           }}
        />
      </div>
    );
  }
}

export default App;
