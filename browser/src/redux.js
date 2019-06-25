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
  userInfo: {},
  loginFail: false,
  redirHome: false,
  newProduct: {},
  inputProduktname: '',
  inputProduktnummer: '',
  inputProduktfotos: '',
  inputProduktpreis: '',
  inputProduktTyp: '',
  inputProduktbeschreibung: '',
  inputCategory: '',
  inputId: '',
  newUser: {},
  inputEmail: '',
  inputPassword: '',
  inputPasswordAgain: '',
  inputVorname: '',
  inputName: '',
  inputStrasse: '',
  inputHausNr: '',
  inputPLZ: '',
  inputOrt: '',
 };

const reducer = (state=initialState, action)=> { // REDUCER = FCT. WITH TWO ARGUMENTS (ACTION = OBJECT)
  const copyOfState = {...state};

  switch(action.type) {
    case 'FETCHDATA_clothes':
    copyOfState.payloadClothes = action.payloadClothes;
    copyOfState.shownClothes = action.payloadClothes;
    return copyOfState;
    case 'FETCHDATA_patterns':
    copyOfState.payloadPatterns = action.payloadPatterns;
    copyOfState.shownPatterns = action.payloadPatterns;
    return copyOfState;
    case 'FILTERDATA_patterns':
    const filteredPatterns = copyOfState.payloadPatterns.filter(obj=> {
     return obj.category.toLowerCase() === action.ev.target.innerText.toLowerCase();
      });
      copyOfState.shownPatterns = filteredPatterns;
      return copyOfState;
    case 'FILTERDATA_clothes':
      const filteredClothes = copyOfState.payloadClothes.filter(obj=> {
       return obj.category.toLowerCase() === action.ev.target.innerText.toLowerCase();
        });
      copyOfState.shownClothes = filteredClothes;
      return copyOfState;
    case 'INPUT':
    console.log(copyOfState.userInfo);
    console.log(action.value);
    // console.log(action.target);
    switch(document.getElementById(`${action.target.id}`).id) {
      case 'produktname':
      copyOfState.inputValProduktname = action.value;
      copyOfState.newProduct.produktname = copyOfState.inputValProduktname;
      return copyOfState;
      case 'produktnummer':
      copyOfState.inputProduktnummer = action.value;
      copyOfState.newProduct.produktnummer = copyOfState.inputProduktnummer;
      return copyOfState;
      case 'produktfotos':
      copyOfState.inputProduktfotos = action.value;
      copyOfState.newProduct.produktfotos = copyOfState.inputProduktfotos;
      return copyOfState;
      case 'preis':
      copyOfState.inputProduktpreis = action.value;
      copyOfState.newProduct.preis = copyOfState.inputProduktpreis;
      return copyOfState;
      case 'produktTyp':
      copyOfState.inputProduktTyp = action.value;
      copyOfState.newProduct.produktTyp = copyOfState.inputProduktTyp;
      return copyOfState;
      case 'produktbeschreibung':
      copyOfState.inputProduktbeschreibung = action.value;
      copyOfState.newProduct.produktbeschreibung = copyOfState.inputProduktbeschreibung;
      return copyOfState;
      case 'category':
      copyOfState.inputCategory = action.value;
      copyOfState.newProduct.category = copyOfState.inputCategory;
      return copyOfState;
      case 'id':
      copyOfState.inputValId = action.value;
      copyOfState.newProduct.id = copyOfState.inputValId;
      return copyOfState;
      case 'email':
      copyOfState.inputEmail = action.value;
      copyOfState.newUser.Email = copyOfState.inputEmail;
      return copyOfState;
      case 'password':
      copyOfState.inputPassword = action.value;
      copyOfState.newUser.Password = copyOfState.inputPassword;
      return copyOfState;
      // case 'pwAgain':
      // copyOfState.inputPasswordAgain = action.value;
      // return copyOfState;
      case 'vorname':
      copyOfState.inputVorname = action.value;
      copyOfState.newUser.vorname = copyOfState.inputVorname;
      return copyOfState;
      case 'name':
      copyOfState.inputName = action.value;
      copyOfState.newUser.name = copyOfState.inputName;
      return copyOfState;
      case 'str':
      copyOfState.inputStrasse = action.value;
      copyOfState.newUser.str = copyOfState.inputStrasse;
      return copyOfState;
      case 'hausnr':
      copyOfState.inputHausNr = action.value;
      copyOfState.newUser.hausnr = copyOfState.inputHausNr;
      return copyOfState;
      case 'plz':
      copyOfState.inputPLZ = action.value;
      copyOfState.newUser.plz = copyOfState.inputPLZ;
      return copyOfState;
      case 'ort':
      copyOfState.inputOrt = action.value;
      copyOfState.newUser.ort = copyOfState.inputOrt;
      return copyOfState;
      case 'userVal':
      copyOfState.userVal = action.value;
      copyOfState.userInfo.Email = copyOfState.userVal;
      return copyOfState;
      case 'pwVal':
      copyOfState.pwVal = action.value;
      copyOfState.userInfo.Password = copyOfState.pwVal
      return copyOfState;

      default:
      return copyOfState;
      }
    case 'SUBMIT_UPDATING':
    console.table(copyOfState.newProduct);
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
    case 'BUY_clothes':
    console.table(copyOfState.basket);
    for (let i=0; i< copyOfState.payloadClothes.length; i++) {
      if (copyOfState.payloadClothes[i].id===action.ev.target.parentElement.id) {
        copyOfState.basket = [...state.basket,copyOfState.payloadClothes[i]];
      }
    }
    copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.preis},0).toFixed(2);
    return copyOfState;
    case 'BUY_patterns':
    for (let i=0; i< copyOfState.payloadPatterns.length; i++) {
      if (copyOfState.payloadPatterns[i].id===action.ev.target.parentElement.id) {
        copyOfState.basket = [...state.basket,copyOfState.payloadPatterns[i]];
      }
    }
    copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.preis},0).toFixed(2);
    return copyOfState;
    case 'REMOVEITEM':

    for (let i=0; i< copyOfState.basket.length; i++) { // LOOP THROUGH ELEMENTS IN BASKET AND
      if (copyOfState.basket[i].id===action.id) { // FIND THE CLICKED ONE

        copyOfState.basket.splice(i, 1);
        copyOfState.basket = [...state.basket];
        // THIS HAS TO HAPPEN!!! IN ORDER TO RERENDER THE COMPONENT AND MAKE YOUR CHANGES VISIBLE
        copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.preis},0).toFixed(2);
        return copyOfState;
      }
    }
    break;
    case 'ORDER_SUBMITTED':
    copyOfState.newOrder = copyOfState.basket;
    copyOfState.basket = [];
    copyOfState.total = 0;
    return copyOfState;

    default:
    return copyOfState;
  }
}

export const bringPayloadPatterns = (data)=> {
  return {
    type: 'FETCHDATA_patterns',
    payloadPatterns: data,
    }
}
export const bringPayloadClothes = (data)=> {
  return {
    type: 'FETCHDATA_clothes',
    payloadClothes: data,
    }
}
export const orderSubmitted = (ev)=> {
  return {
    type: 'ORDER_SUBMITTED',
    event: ev,
  }
}

export const filterPatterns = (ev)=> {
  return {
    type: 'FILTERDATA_patterns',
    ev: ev,
  }
}
export const filterClothes = (ev)=> {


// FOR EVERY TRIGGERED FETCH WE GET DATA THIS FILLS WITH EVERY FETCH THE EMPTY EXISTING ARRAYS IN
// THE STATES WHICH ARE ESSENTIAL FOR OUR FILTERING THUS THE DATA IS FETCHED ONCE AND AFTER THAT
// ONLY FILTERED IN THE BROWSER - GOOD PERFORMANCE!


  return {
    type: 'FILTERDATA_clothes',
    ev: ev,
  }
}
export const changeInput = (ev)=> {
  return {
    type: 'INPUT',
    event: ev,
    value: ev.currentTarget.value,
    target: ev.currentTarget,
  }
}
export const submitUpdating = (ev)=> {

    return {
    type: 'SUBMIT_UPDATING',
    event: ev,
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
//actions to the basket:
export const buyPatterns = (ev)=> {
  return {
    type: 'BUY_patterns',
    ev: ev,
    target: ev.target,
    id: ev.target.id,
  }
}
export const buyClothes = (ev)=> {
  console.log(ev.target.id)
  return {
    type: 'BUY_clothes',
    ev: ev,
    target: ev.target,
    id: ev.target.id,
  }
}

export const removeItem = (ev) => { // EV SHOULD ALWAYS BE TRANSPORTED
  // THESE DEFINED CONSTS ARE LIKE ENVELOPES FOR TRANSFERRING INFO TO COMPONENTS BY REDUX

  return {
    type: 'REMOVEITEM',
    ev: ev,
    id: ev.target.parentElement.id
  }
}
export const submitOrder = (order)=> {
  return function(dipatch) {
    fetch('orders/checkout',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res=> res.json())
    .then(msg=> console.log(msg))
    .catch(err=> console.error(err))
  }
}

export const redir = (ev)=> {
    return {
      type: 'REDIR',
      ev: ev,
    }
}

export const fetchPatterns = ()=> {
  return function(dispatch) {
    fetch('/patterns/getPatterns')
    .then(res=> res.json())
    .then(data=> {
      dispatch(bringPayloadPatterns(data));
    })
    .catch(err=> console.error(err))
  }
}
export const fetchClothes = ()=> {
  return function(dispatch) {
    fetch('/clothes/getAllClothes')
    .then(res=> res.json())
    .then(data=> {
      dispatch(bringPayloadClothes(data))
    })
    .catch(err=> console.error(err))
  }
}
export const updatingDB = (product)=> {
  return function(dispatch) {
    console.log(product);
  fetch('patterns/addPatterns',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  .then(res=> res.json())
  .then(data=> {
    console.log(data);
  })
  .catch(err=> console.error(err))
}
}
export const createUser = (user)=> {
  return function(dispatch) {
    console.log(user);
  fetch('/users/signUp',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(user=> console.log(user))
  .then(res=> res.json())
  .then(msg=> {
    console.log(msg);
  })
  .catch(err=> console.error(err))
  }
}
export const loginUser = (user)=> {
  console.log(user);
  return function(dispatch) {
    fetch('users/login',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(msg=> {
      console.log(msg);
    })
  }
}


export const store = createStore(reducer, applyMiddleware(thunk));
