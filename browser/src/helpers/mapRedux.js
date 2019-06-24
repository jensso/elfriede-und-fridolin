import {
  submitOrder,
  redir,
  buyItem,
  removeItem,
  fetchFromExpress,
  filterPayload,
  nextPic,
  hasFailedAction,
  changeAction,
  requestAction,
  redirectToLogin,
  redirectToHome,
  loginFetch,
  reduxLogout,
 } from '../redux.js';

 // YOU COULD HAVE THIS ALL IN REDUX.JS ALSO BUT FOR BETTER OVERVIEW PUT IN SEPERATE FILES.


// STATETOPROPS IS EVERY VALUE WHICH IS TAKEN FROM GLOBAL STATE
// VALUES:
export const mapStateToProps = (state)=> {
  return {
    payload: state.payload,
    shownPatterns: state.shownPatterns,
    shownClothes: state.shownClothes,
    basket: state.basket,
    newOrder: state.newOrder,
    next: state.next,
    total: state.total,
    submitted: state.submitted,
    userVal: state.userVal,
    pwVal: state.pwVal,
    loginRedir: state.loginRedir,
    userInfo: state.userInfo,
    loginFail: state.loginFail,
    redirHome: state.redirHome,
  }
}

// DISPATCH ARE FUNCTIONS WHICH INFLUENCE GLOBAL STATES //
// AND SHOULD BE AVAILABLE FOR DIFFERENT COMPONENTS
// FUNCTIONS:
export const mapDispatchToProps = (dispatch)=> {
   return {
    makeFetch: (ev)=> dispatch(fetchFromExpress(ev)),
    filterData: (ev)=> dispatch(filterPayload(ev)),
    nextPic: (ev)=> dispatch(nextPic(ev)),
    buyItem: (ev)=> dispatch(buyItem(ev)),
    removeItem: (ev)=> dispatch(removeItem(ev)),
    submit: (ev)=> dispatch(submitOrder(ev)),
    redir: (ev)=> dispatch(redir(ev)),
    hasFailed: ()=> dispatch(hasFailedAction()),
    changeAction: (userPayload)=> dispatch(changeAction(userPayload)),
    reqAction: (userData)=> dispatch(requestAction(userData)),
    redirLogin: ()=> dispatch(redirectToLogin()),
    redirHome: ()=> dispatch(redirectToHome()),
    loginFetch: (credentials)=> dispatch(loginFetch(credentials)),
    reduxLogout: ()=> dispatch(reduxLogout()),
  }
}
