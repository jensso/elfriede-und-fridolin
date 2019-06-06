import React from 'react';

class ShoppingBasket extends React.Component {
  render() {
    return(
      <>
      <div>
        <i>your Products:</i><br/>
        <ul>
        {this.props.basket.map((obj, index)=>{
          return <li className="list-group-item" key={index}>{obj.amount}x {obj.type} for {obj.price.toFixed(2)} <br />
          <i>={obj.sum.toFixed(2)}</i>
          </li>
        })}
        </ul>
      </div>
      </>
    )
  }
}
