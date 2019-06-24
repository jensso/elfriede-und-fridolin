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
  changeInput,
  nextPic,
  updatingDB,
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
    newProduct: state.newProduct,
    inputVal1: state.inputVal1,
    inputVal2: state.inputVal2,
    inputVal3: state.inputVal3,
    inputVal4: state.inputVal4,
    inputVal5: state.inputVal5,
    inputVal6: state.inputVal6,
    inputVal7: state.inputVal7,
    inputVal8: state.inputVal8,
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
    changeInput: (ev)=> dispatch(changeInput(ev)),
    submitUpdating: (obj)=> dispatch(updatingDB(obj))
  }
}
