import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // YOU NEED THUNK IF YOU USE MIDDLEWARE // NPM INSTALLED HELPER
const initialState = { // YOU HAVE TO DEFINE A initialState ANYTIME YOU WANT CHANGE A VALUE
  payload: [], // PAYLOAD IS THE DATA WHICH YOU GET FROM THE SERVER
  shownPatterns: [],
  shownClothes: [],
  basket: [],
  newOrder: [],
  next: 0,
  total: 0,
  submitted: false,
  userVal: '',
  pwVal: '',
  loginRedir: false,
  userInfo: null,
  loginFail: false,
  redirHome: false,
 };

const reducer = (state=initialState, action)=> { // REDUCER = FCT. WITH TWO ARGUMENTS (ACTION = OBJECT)
  const copyOfState = {...state};

  switch(action.type) {
    case 'FETCHDATA':
    copyOfState.payload = action.payload;
    copyOfState.shownPatterns = action.payload;
    copyOfState.shownClothes = action.payload;
    console.table(copyOfState.payload);
    return copyOfState;
    case 'FILTERDATA':
    const filteredPatterns = copyOfState.payload.filter(obj=> {
     return obj.category.toLowerCase() === action.ev.target.innerText.toLowerCase();
      });
    copyOfState.shownPatterns = filteredPatterns;
    copyOfState.shownClothes = filteredPatterns;
    return copyOfState;
    case 'NEXT':
    console.table(copyOfState);
    for (let i=0; i< copyOfState.payload[i].produktfotos.length; i++) {
      console.log(copyOfState.payload[i].produktfotos.length);
      if (copyOfState.next <= copyOfState.payload[i].produktfotos.length)
        {
          copyOfState.next++;
          console.error(copyOfState.next);
          return copyOfState;
          }
    else {
          copyOfState.next = 0;
          console.warn(copyOfState.next);
          return copyOfState;
            }
  }
    console.log(copyOfState.next);
    return copyOfState;
    case 'BUYITEM':
    console.table(copyOfState);
    for (let i=0; i< copyOfState.payload.length; i++) {
      if (copyOfState.payload[i].id===action.ev.target.parentElement.id) {
        copyOfState.basket = [...state.basket,copyOfState.payload[i]];
      }
    }
    copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.preis},0).toFixed(2);
    return copyOfState;
    case 'REMOVEITEM':
    // console.log(copyOfState.basket);
    // console.log(action.id);
    for (let i=0; i< copyOfState.basket.length; i++) { // LOOP THROUGH ELEMENTS IN BASKET AND
      if (copyOfState.basket[i].id===action.id) { // FIND THE CLICKED ONE
        // console.log(copyOfState.basket[i].id===action.id);
        copyOfState.basket.splice(i, 1);
        copyOfState.basket = [...state.basket];
        // THIS HAS TO HAPPEN!!! IN ORDER TO RERENDER THE COMPONENT AND MAKE YOUR CHANGES VISIBLE
        copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.preis},0).toFixed(2);

        return copyOfState;
      }
    }
    break;
    case 'SUBMIT':
    console.log(copyOfState);
    copyOfState.newOrder = copyOfState.basket;
    copyOfState.basket = [];
    copyOfState.total = 0;
    console.warn(copyOfState);

    return copyOfState;

    case 'REDIR':
      return copyOfState;

    default:
    return copyOfState;
  }
}
const jwt = require('jsonwebtoken');
// LOGIN AUTHENTIFICATION PART // IS THE LOGIN SUCCESFUL USR GETS TOKEN HERE
const authenticated = async (req, res, next) => {
  try {
    const tokenCookie = req.cookies.authToken.split(' ')[1];
    await jwt.verify(tokenCookie, process.env.SECRET);

    req.token = tokenCookie;

    next();
  }catch (error) {
    next(error);
  }
}

export const bringPayload = (data)=> {
  console.log(data);
  return {
    type: 'FETCHDATA',
    payload: data,
    shownPatterns: data,
    shownClothes: data,
    }
}

// FOR EVERY TRIGGERED FETCH WE GET DATA THIS FILLS WITH EVERY FETCH THE EMPTY EXISTING ARRAYS IN
// THE STATES WHICH ARE ESSENTIAL FOR OUR FILTERING THUS THE DATA IS FETCHED ONCE AND AFTER THAT
// ONLY FILTERED IN THE BROWSER - GOOD PERFORMANCE!

export const filterPayload = (ev)=> {
  return {
    type: 'FILTERDATA',
    ev: ev,
  }
}
export const nextPic = (ev)=> {
  console.log(ev.target.parentElement.id)
  return {
    type: 'NEXT',
    ev: ev,
    target: ev.target,
    id: ev.target.parentElement.id,
  }
}

export const buyItem = (ev)=> {
  console.log(ev.target.id)
  return {
    type: 'BUYITEM',
    ev: ev,
    target: ev.target,
    id: ev.target.id,
  }
}

export const removeItem = (ev) => { // EV SHOULD ALWAYS BE TRANSPORTED
  // THESE DEFINED CONSTS ARE LIKE ENVELOPES FOR TRANSFERRING INFO TO COMPONENTS BY REDUX

  // console.log(ev.target.parentElement.id);
  return {
    type: 'REMOVEITEM',
    ev: ev,
    id: ev.target.parentElement.id
  }
}
export const submitOrder = (ev)=> {
  return {
    type: 'SUBMIT',
    ev: ev,
  }
}
export const redir = (ev)=> {
    return {
      type: 'REDIR',
      ev: ev,
    }
}

export const fetchFromExpress = ()=> {
  return function(dispatch) {
    fetch('/patterns/getPatterns')
    .then(res=> res.json())
    .then(data=> {
      dispatch(bringPayload(data))
    })
    .catch(err=> console.error(err))
  }
}
export const hasFailedAction = () => {
  return {
    type: 'HAS_FAILED',
  }
}
export const changeAction = userPayload => {
  return {
    type: 'CHANGE',
    userPayload: userPayload,
  }
}
export const requestAction = userData => {
  return {
    type: 'FETCH_DATA',
    userData: userData,
  }
}
export const redirectToLogin = () => {
  return {
    type: 'REDIRECT_LOGIN',
  }
}
export const redirectToHome = () => {
  return {
    type: 'REDIRECT_HOME',
  }
}
export const loginFetch = credentials => {
  return function(dispatch) {
    fetch('/users/login', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then(res => {
      if (res.status === 400 || res.status === 404) {
        throw new Error('Authentication failed');
      }

      return res.json();
    })
    .then(userData => {
      console.log(userData);
      authenticated.login();
      dispatch(requestAction(userData));
      dispatch(redirectToLogin());
    })
    .catch(err => {
      console.warn(err);
      dispatch(hasFailedAction());
    })
  }
}

export const reduxLogout = () => {
  return function(dispatch) {
    fetch('/users/loggedOut')
      .then(res => {
        if (res.status === 400 || res.status === 404) {
          throw new Error('Log out failed');
        }
        return res.json();
      })
      .then(msgData => {
        console.log(msgData);
        dispatch(redirectToHome());
      })
      .catch(err => console.warn(err))
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
