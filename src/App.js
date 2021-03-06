import React, { Component } from 'react';
import PersonList from './components/PersonList';
import PersonInput from './components/PersonInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonInput />
        <PersonList />
      </div>
    );
  }
}

export default App;
