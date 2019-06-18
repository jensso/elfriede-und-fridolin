import { submitOrder, redir, buyItem, removeItem, fetchFromExpress, filterPayload, nextPic } from '../redux.js';


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
  }
}
export const mapDispatchToProps = (dispatch)=> {
   return {
    makeFetch: (ev)=> dispatch(fetchFromExpress(ev)),
    filterData: (ev)=> dispatch(filterPayload(ev)),
    nextPic: (ev)=> dispatch(nextPic(ev)),
    buyItem: (ev)=> dispatch(buyItem(ev)),
    removeItem: (ev)=> dispatch(removeItem(ev)),
    submit: (ev)=> dispatch(submitOrder(ev)),
    redir: (ev)=> dispatch(redir(ev)),
  }
}
