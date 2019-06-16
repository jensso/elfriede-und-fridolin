import { buyItem, removeItem, fetchFromExpress, filterPayload, nextPic } from '../redux.js';


export const mapStateToProps = (state)=> {
  return {
    payload: state.payload,
    shownPatterns: state.shownPatterns,
    next: state.next,
    target: state.target,
    basket: state.basket,
  }
}
export const mapDispatchToProps = (dispatch)=> {
   return {
    makeFetch: (ev)=> dispatch(fetchFromExpress(ev)),
    filterData: (ev)=> dispatch(filterPayload(ev)),
    nextPic: (ev)=> dispatch(nextPic(ev)),
    buyItem: (ev)=> dispatch(buyItem(ev)),
    removeItem: (ev)=> dispatch(removeItem(ev)),
  }
}