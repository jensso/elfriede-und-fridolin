import React from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { NavBar } from './components/navbar.js';
import { LandingPage } from './components/main.js';
import { NavHome } from './components/navHome.js';
import { ContactFooter } from './components/contactFooter.js';


class App extends React.Component {
  render() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <NavHome />
      <ContactFooter />
      <Footer />
    </div>
  )};
}

export default App;
