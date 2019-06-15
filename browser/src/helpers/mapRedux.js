import { fetchFromExpress, filterPayload } from '../redux.js';


export const mapStateToProps = (state)=> {
  return {
    payload: state.payload,
    shownPatterns: state.shownPatterns,
  }
}
export const mapDispatchToProps = (dispatch)=> {
   return {
    makeFetch: (ev)=> dispatch(fetchFromExpress(ev)),
    filterData: (ev)=> dispatch(filterPayload(ev))
  }
}
