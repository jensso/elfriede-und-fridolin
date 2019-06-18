import React from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { NavBar } from './components/navbar.js';
import { LandingPage } from './components/main.js';
// import { HomeGallery } from './components/homeGallery.js';
import { NavHome } from './components/navHome.js';
// import { SwipeableTextMobileStepper } from './components/homeGallery.js';
import { ContactFooter } from './components/contactFooter.js';
import { CuttingPatternsRX } from './components/cuttingPatterns.js';
import { ClothesRX } from './components/clothes.js';
import { ShoppingBasketRX } from './components/shoppingBasket.js';
import { NewsSection } from './components/news.js';

import { BrowserRouter, Route } from 'react-router-dom';


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
      <Route path='/Schnittmuster' component={CuttingPatternsRX}/>
      <Route path='/Neuheiten' component={NewsSection}/>
      <Route path='/Kleidung' component={ClothesRX}/>
      <Route path='/Kontakt' component={NavBar}/>
      <Route path='/Kontakt' component={ContactFooter}/>
      <Route path='/Warenkorb' component={ShoppingBasketRX}/>
    </BrowserRouter>
    </div>
  )};
}

export default App;
