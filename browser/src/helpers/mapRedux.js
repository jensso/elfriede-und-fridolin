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
  createUser,
  loginUser
 } from '../redux.js';

 // YOU COULD HAVE THIS ALL IN REDUX.JS ALSO BUT FOR BETTER OVERVIEW PUT IN SEPERATE FILES.


// STATETOPROPS IS EVERY VALUE WHICH IS TAKEN FROM GLOBAL STATE
// VALUES:
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
    inputProduktname: state.inputProduktname,
    inputProduktnummer: state.inputProduktnummer,
    inputProduktfotos: state.inputProduktfotos,
    inputProduktpreis: state.inputProduktpreis,
    inputProduktTyp: state.inputProduktTyp,
    inputProduktbeschreibung: state.inputProduktbeschreibung,
    inputCategory: state.inputCategory,
    inputId: state.inputId,
    newUser: state.newUser,
    inputEmail: state.inputEmail,
    inputPassword: state.inputPassword,
    inputPasswordAgain: state.inputPasswordAgain,
    inputVorname: state.inputVorname,
    inputName: state.inputName,
    inputStrasse: state.inputStrasse,
    inputHausNr: state.inputHausNr,
    inputPLZ: state.inputPLZ,
    inputOrt: state.inputOrt,
  }
}

// DISPATCH ARE FUNCTIONS WHICH INFLUENCE GLOBAL STATES //
// AND SHOULD BE AVAILABLE FOR DIFFERENT COMPONENTS
// FUNCTIONS:
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
    submitUpdating: (obj)=> dispatch(updatingDB(obj)),
    createUser: (user)=> dispatch(createUser(user)),
    loginUser: (user)=> dispatch(loginUser(user))
  }
}
