import React from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { NavBar } from './components/navbar.js';
import { LandingPage } from './components/main.js';
// import  ImgMediaCard  from './components/productCard.js';



class App extends React.Component {
  render() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  )};
}

export default App;
