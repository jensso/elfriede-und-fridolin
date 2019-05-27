import React from 'react';
import logo from './logo.svg';
import './App.css';
import Impressum from './components/impressum.js';
import AllGesBed from './components/agb.js';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Impressum />
      <AllGesBed />
    </div>
  )};
}

export default App;
