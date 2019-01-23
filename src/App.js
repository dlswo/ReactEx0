import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MydHello from './ex01/MyHello'
import NameTag from './ex01/NameTag'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MydHello></MydHello>
          <NameTag name="HI" age="52"></NameTag>
          <NameTag name="BYE" age="50"></NameTag>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            아니이런!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
