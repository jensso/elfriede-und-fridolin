import {
  submitOrder,
  redir,
  buyPatterns,
  buyClothes,
  removeItem,
  fetchPatterns,
  fetchClothes,
  filterPatterns,
  filterClothes,
  nextPic,
  hasFailedAction,
  changeAction,
  requestAction,
  redirectToLogin,
  redirectToHome,
  loginFetch,
  reduxLogout,
 } from '../redux.js';


export const mapStateToProps = (state)=> {
  return {
    payloadClothes: state.payloadClothes,
    payloadPatterns: state.payloadPatterns,
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
export const mapDispatchToProps = (dispatch)=> {
   return {
    fetchPatterns: (ev)=> dispatch(fetchPatterns(ev)),
    fetchClothes: (ev)=> dispatch(fetchClothes(ev)),
    filterPatterns: (ev)=> dispatch(filterPatterns(ev)),
    filterClothes: (ev)=> dispatch(filterClothes(ev)),
    nextPic: (ev)=> dispatch(nextPic(ev)),
    buyClothes: (ev)=> dispatch(buyClothes(ev)),
    buyPatterns: (ev)=> dispatch(buyPatterns(ev)),
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
