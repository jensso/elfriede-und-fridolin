import React from 'react';
import {Button} from '@material-ui/core';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

class ShopSummary extends React.Component {
  render() {
    return(
      <div>
        <span>netto {(this.props.total/1.19).toFixed(2)}</span><br/>
        <span>zzgl. MwSt {(this.props.total*0.19/1.19).toFixed(2)}</span><br/><br/>
        <span>+ Versandkosten {(6.9).toFixed(2)}</span><br/><br/>
        <hr />
        <b>Summe: € {(this.props.total+6.9).toFixed(2)}</b>
        <hr />
        <Button onClick={this.props.submit}>bestellen</Button>
      </div>
    )
  }
}
export const ShopSummaryRX = connect(mapStateToProps,mapDispatchToProps)(ShopSummary);
