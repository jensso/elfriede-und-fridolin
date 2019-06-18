import React from 'react';
import {Button} from '@material-ui/core';

export class ShopSummary extends React.Component {
  render() {
    return(
      <div>
        <span>netto {(100/1.19).toFixed(2)}</span><br/>
        <span>zzgl. MwSt {(100*0.19/1.19).toFixed(2)}</span><br/><br/>
        <span>+ Versandkosten {(6.9).toFixed(2)}</span><br/><br/>
        <hr />
        <b>Summe: € {(106.9).toFixed(2)}</b>
        <hr />
        <Button onClick={this.props.submit}>bestellen</Button>
      </div>
    )
  }
}
