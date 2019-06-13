import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  payload: [],
 };

const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {
    case 'fetchData':
    copyOfState.payload = action.payload;
    console.warn(copyOfState.payload);
    return copyOfState;

    default:
    return copyOfState;
  }
}
const putTheObj = (msgObj)=> {
  console.log(msgObj);
  return {
    type: 'fetchData',
    payload: msgObj
  }
}


export const fetchFromExpress = ()=> {
  return function(dispatch) {
    fetch('/patterns/getPatterns')
    .then(res=> res.json())
    .then(msgObj=> {
      dispatch(putTheObj(msgObj))
    })
    .catch(err=> console.error(err))
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
