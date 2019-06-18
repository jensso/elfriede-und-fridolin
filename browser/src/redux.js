import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  payload: [],
  shownPatterns: [],
  shownClothes: [],
  basket: [],
  newOrder: [],
  next: 0,
  total: 0,
  submitted: false,
 };

const reducer = (state=initialState, action)=> {
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
    return copyOfState;
    case 'REMOVEITEM':
    // console.log(copyOfState.basket);
    // console.log(action.id);
    for (let i=0; i< copyOfState.basket.length; i++) {
      if (copyOfState.basket[i].id===action.id) {
        // console.log(copyOfState.basket[i].id===action.id);
        copyOfState.basket.splice(i, 1);
        copyOfState.basket = [...state.basket];
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
export const bringPayload = (data)=> {
  console.log(data);
  return {
    type: 'FETCHDATA',
    payload: data,
    shownPatterns: data,
    shownClothes: data,
    }
}
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

export const removeItem = (ev)=> {
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

export const store = createStore(reducer, applyMiddleware(thunk));
