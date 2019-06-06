import React from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { NavBar } from './components/navbar.js';
import { LandingPage } from './components/main.js';
import { NavHome } from './components/navHome.js';
import { ContactFooter } from './components/contactFooter.js';
import { CuttingPatterns } from './components/cuttingPatterns.js';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';


class Start extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <LandingPage />
        <NavHome />
        <ContactFooter />
        <Footer />
      </>
    )
  }
}
class App extends React.Component {
  render() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path='/' component={Start}/>
      <Route path='/Schnittmuster' component={CuttingPatterns}/>
    </BrowserRouter>
    </div>
  )};
}

export default App;
