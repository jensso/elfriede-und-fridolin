import React from 'react';
import Container from '@material-ui/core/Container';

const basket = [];

export class ShoppingBasket extends React.Component {
  render() {
    return(
      <Container>
      <div>
        <i>your Products:</i><br/>
        <ul>
        {basket.map((obj, index)=>{
          return <li key={index}>{obj.amount}x {obj.type} for {obj.price.toFixed(2)} <br />
          <i>={obj.sum.toFixed(2)}</i>
          </li>
        })}
        </ul>
      </div>
      </Container>
    )
  }
}
