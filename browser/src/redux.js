import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  payload: [],
  shownPatterns: [],
  shownClothes: [],
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


    default:
    return copyOfState;
  }
}
const bringPayload = (data)=> {
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
