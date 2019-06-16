import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  payload: [],
  shownPatterns: [],
  shownClothes: [],
  basket: [],
  next: 0,
  target: null,
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
    for (let i=0; i< copyOfState.payload[i].produktfotos.length; i++) {
      console.log(copyOfState.payload[i].produktfotos.length);
      if (copyOfState.next <= copyOfState.payload[i].produktfotos.length)
        {
          copyOfState.next++;
          console.warn(copyOfState.next);
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
    copyOfState.basket.push(action.ev.target);
    console.log(copyOfState.basket);
    return copyOfState;

    case 'REMOVEITEM':
    console.table(copyOfState.basket);
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
  return {
    type: 'NEXT',
    ev: ev,
    target: ev.target,
  }
}

export const buyItem = (ev)=> {
  return {
    type: 'BUYITEM',
    ev: ev,
  }
}

export const removeItem = (ev)=> {
  return {
    type: 'REMOVEITEM',
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
