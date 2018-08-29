import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
