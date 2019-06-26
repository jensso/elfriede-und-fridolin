import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux.js';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// START FOR THE WHOLE APP IS APP.JS AND REDUX IS CONNECTED HERE THROUGH THE PROVIDER TOOL(FCT.)
// STORE IS THE GLOBAL STATE WHERE THE DIFFERENT COMPONENTS GET THE DEFINED STATE VALUES

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
