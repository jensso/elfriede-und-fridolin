import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlertDialog from './components/impressum.js';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AlertDialog />
    </div>
  )};
}

export default App;
