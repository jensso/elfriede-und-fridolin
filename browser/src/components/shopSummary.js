import React from 'react';
import { styled } from '@material-ui/styles';
import { Box, Button} from '@material-ui/core';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

const MuiShopSummary = styled(Box)({

    '& h3': {
      width: '100%',
      textAlign: 'center',
      fontSize: '1rem',
      fontFamily: 'Open Sans Condensed',
      fontWeight: 'lighter',
      letterSpacing: '0.3rem',
      color: '#ad8262',
    },

    '& div': {
      width: '100%',

      '& section': {
        padding: '1vw 1vw !important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        fontFamily: 'Open Sans Condensed',
        color: '#ad8262',

        '& span': {
          alignSelf: 'center',
          fontWeight: 'bolder',
          textTransform: 'capitalize',
          letterSpacing: '0.2rem',
          fontSize: '1rem',

          '& p': {
            fontSize: '0.5rem',
          },
        },

        '& button': {
          margin: '5vw auto',
          fontSize: '1rem',
          color: 'white',
          fontFamily: 'Open Sans Condensed',
          letterSpacing: '0.1rem',
          background: '#ad8262',

          '&:hover': {
            background: '#B5C4AF',
            },
          '&:focus': {
            outline: 'none',
            },
          }
      },
  }
})

class ShopSummary extends React.Component {
  submitOrder = (ev)=> {
    ev.preventDefault();
    console.log(this.props.basket);
    this.props.submitOrder(this.props.basket);

  }
  render() {
    return(
      <MuiShopSummary>
        <>
        {this.props.showMessage && <h2><b>{this.props.showMessage}</b></h2>}
        {this.props.total == 0 && <h3>Dein Warenkorb ist leer.</h3>}
        {this.props.total > 0 &&
          <div>
            <section>
              <span>netto € {(this.props.total/1.19).toFixed(2)}
              <p>zzgl. MwSt € {(this.props.total*0.19/1.19).toFixed(2)}</p>
              Summe: € {this.props.total}
              <br/>
              <p>bei Versand + Versandkosten € {(6.9).toFixed(2)}</p>

              </span><br></br>
              <Button onClick={this.submitOrder}>bestellen</Button>
            </section>
          </div> }
        </>
      </MuiShopSummary>
    )
  }
}
export const ShopSummaryRX = connect(mapStateToProps,mapDispatchToProps)(ShopSummary);
