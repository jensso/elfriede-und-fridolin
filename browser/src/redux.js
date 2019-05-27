import { createStore } from 'redux';

const initialState = { };

const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {
    case '':
    return copyOfState;

    default:
    return copyOfState;
  }
}


export const store = createStore(reducer);
