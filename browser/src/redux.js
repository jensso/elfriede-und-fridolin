import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const initialState = {
  payloadClothes: [],
  payloadPatterns: [],
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
  newProduct: {},
  inputVal1: '',
  inputVal2: '',
  inputVal3: '',
  inputVal4: '',
  inputVal5: '',
  inputVal6: '',
  inputVal7: '',
  inputVal8: '',
 };

const reducer = (state=initialState, action)=> {
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
    // console.log(copyOfState.newProduct);
    switch(document.getElementById(`${action.target.id}`).id) {
      case 'produktname':
      copyOfState.inputVal1 = action.value;
      copyOfState.newProduct.produktname = copyOfState.inputVal1;
      return copyOfState;
      case 'produktnummer':
      copyOfState.inputVal2 = action.value;
      copyOfState.newProduct.produktnummer = copyOfState.inputVal2;
      return copyOfState;
      case 'produktfotos':
      copyOfState.inputVal3 = action.value;
      copyOfState.newProduct.produktfotos = copyOfState.inputVal3;
      return copyOfState;
      case 'preis':
      copyOfState.inputVal4 = action.value;
      copyOfState.newProduct.preis = copyOfState.inputVal4;
      return copyOfState;
      case 'produktTyp':
      copyOfState.inputVal5 = action.value;
      copyOfState.newProduct.produktTyp = copyOfState.inputVal5;
      return copyOfState;
      case 'produktbeschreibung':
      copyOfState.inputVal6 = action.value;
      copyOfState.newProduct.produktbeschreibung = copyOfState.inputVal6;
      return copyOfState;
      case 'category':
      copyOfState.inputVal7 = action.value;
      copyOfState.newProduct.category = copyOfState.inputVal7;
      return copyOfState;
      case 'id':
      copyOfState.inputVal8 = action.value;
      copyOfState.newProduct.id = copyOfState.inputVal8;
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
    console.table(copyOfState.basket);
    for (let i=0; i< copyOfState.payloadPatterns.length; i++) {
      if (copyOfState.payloadPatterns[i].id===action.ev.target.parentElement.id) {
        copyOfState.basket = [...state.basket,copyOfState.payloadPatterns[i]];
      }
    }
    copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.preis},0).toFixed(2);
    return copyOfState;
    case 'REMOVEITEM':

    for (let i=0; i< copyOfState.basket.length; i++) {
      if (copyOfState.basket[i].id===action.id) {
        // console.log(copyOfState.basket[i].id===action.id);
        copyOfState.basket.splice(i, 1);
        copyOfState.basket = [...state.basket];
        copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.preis},0).toFixed(2);
        return copyOfState;
      }
    }
    break;
    case 'SUBMIT':
    copyOfState.newOrder = copyOfState.basket;
    copyOfState.basket = [];
    copyOfState.total = 0;
    return copyOfState;

    case 'REDIR':
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
export const filterPatterns = (ev)=> {
  return {
    type: 'FILTERDATA_patterns',
    ev: ev,
  }
}
export const filterClothes = (ev)=> {
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
  console.log('sendNewProduct to DB');

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
  console.log(ev.target.id)
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
export const removeItem = (ev)=> {
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
    // dispatch(submitUpdating(dispatch))
  })
  .catch(err=> console.error(err))
}
}

export const store = createStore(reducer, applyMiddleware(thunk));
