import { Component } from 'react';
import { connect } from 'react-redux';
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
                 this.props.dispatch({
                  type: "TEAM_ADDED",
                  team
                 })
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
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <TeamsTable 
          teams={this.props.teams} 
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
const mapStateToProps = state => ({
    teams: state.teams
});
const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
