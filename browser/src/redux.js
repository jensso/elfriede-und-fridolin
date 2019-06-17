import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  payload: [],
  shownPatterns: [],
  shownClothes: [],
  basket: [],
  next: 0,
  target: null,
  elemId: '?',
  ev: '',
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
    // const id = ev.currentTarget.parentElement.id;
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
    console.table(copyOfState);
    for (let i=0; i< copyOfState.payload.length; i++) {
      console.log(copyOfState.payload[i].id);
      console.warn(action.ev.target.parentElement.id);
      if (copyOfState.payload[i].id===action.ev.target.parentElement.id) {
        copyOfState.basket.push(copyOfState.payload[i]);
        console.log(copyOfState.basket);
      }
    }

    return copyOfState;
    case 'REMOVEITEM':
    console.table(copyOfState);
    console.table(action.ev.target.id);
    for (let i=0; i< copyOfState.basket.length; i++) {
      if (copyOfState.basket[i].id===action.ev.target.id)
      console.error(copyOfState.basket[i].id);
    }

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
  console.log(ev.target.parentElement.id)
  return {
    type: 'BUYITEM',
    ev: ev,
    target: ev.target,
    id: ev.target.parentElement.id,
  }
}

export const removeItem = (ev)=> {
  console.log(ev.target);
  return {
    type: 'REMOVEITEM',
    ev: ev,
    id: ev.target.id
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
