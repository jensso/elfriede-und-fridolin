import React from 'react';
import './App.css';
import { Footer } from './components/footer.js';
import { NavBar } from './components/navbar.js';
import { LandingPage } from './components/main.js';
import { HomeGallery } from './components/homeGallery.js';
import { NavHome } from './components/navHome.js';
import { AdminUpdateRX } from './components/adminUpdate.js';
import { FreeProducts } from './components/freeProducts.js';
import { ContactFooter } from './components/contactFooter.js';
import { CuttingPatternsRX } from './components/cuttingPatterns.js';
import { ClothesRX } from './components/clothes.js';
import { NewProductsRX } from './components/newProducts.js';
import { OffersRX } from './components/offers.js';
import { ShoppingBasketRX } from './components/shoppingBasket.js';
import { UserLoginRX } from './components/userLogin.js';
import { UserRegistrationRX } from './components/userRegistration.js';
import { Admin } from './components/adminLogin.js';

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
      <Route path='/Gallerie' component={HomeGallery}/>
      <Route path='/Schnittmuster' component={CuttingPatternsRX}/>
      <Route path='/Kleidung' component={ClothesRX}/>
      <Route path='/Neuheiten' component={NewProductsRX}/>
      <Route path='/Angebote' component={OffersRX}/>
      <Route path='/Warenkorb' component={ShoppingBasketRX}/>
      <Route path='/Login' component={UserLoginRX}/>
      <Route path='/UserRegistration' component={UserRegistrationRX}/>
      <Route path='/Admin' component={Admin}/>
      <Route path='/Kontakt' component={NavBar}/>
      <Route path='/Kontakt' component={ContactFooter}/>
      <Route path='/Downloads' component={NavBar}/>
      <Route path='/Downloads' component={FreeProducts}/>
      <Route path='/UPDATE' component={AdminUpdateRX}/>
    </BrowserRouter>
    </div>
  )};
}

export default App;
