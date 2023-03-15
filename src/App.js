import './App.css';
import { TeamsTable } from "./TeamsTable";

let teams = [
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

function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
      <div>Search</div>
      <TeamsTable teams={teams} border={2}/>
    </div>
  );
}

export default App;
