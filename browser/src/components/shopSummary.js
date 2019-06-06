import React from 'react';

class ShopSummary extends React.Component {
  render() {
    return(
      <div className="container bg-info my-1 p-2">
        <i>your shopping-cart:</i><br/><br/>
        <kbd>netto {(this.props.total/1.19).toFixed(2)}</kbd><br/>
        <kbd>+ tax  {(this.props.total*0.19/1.19).toFixed(2)}</kbd><br/><br/>
        <b>total: $ {this.props.total}</b><hr />
        <button onClick={this.props.submit} className="btn btn-sm bg-secondary text-light m-1 p-1">submit order</button>
      </div>
    )
  }
}
