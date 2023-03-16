import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


const teams = (state = [], action) => {
  console.warn('teams', state, action);
  switch (action.type) {
    case 'TEAMS_LOADED': {
      return action.teams
    }
    case 'TEAM_ADDED': {
      return [...state, action.team];
    }
    case 'TEAM_REMOVED': {
      return state.filter(team => team.id != action.id);
    }
    default:
      return state;
  }
};

const count = (state = 0, action) => {
  switch (action.type) {
    case 'TEAMS_LOADED': {
      return action.teams.length
    }
    case 'TEAM_ADDED': {
      return state + 1;
    }
    case 'TEAM_REMOVED': {
      return state - 1;
    }
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_CHANGED': {
      return action.filter
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  teams,
  count,
  filter
});

const store = createStore(rootReducer);
console.warn('store', store);

store.subscribe(() => {
  console.warn('data changed', store.getState());
})
function load() {
  fetch("http://localhost:3000/teams-json")
    .then(res => res.json())
    .then(teams => {
      store.dispatch({ type: 'TEAMS_LOADED', teams });
    });
}
load();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();