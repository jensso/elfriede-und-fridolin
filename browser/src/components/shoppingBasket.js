import React from 'react';
import { Box,Button } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { NavBar } from './navbar.js';
import { connect } from 'react-redux';
import { ShopSummaryRX } from './shopSummary.js';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';
import { makeStyles } from '@material-ui/styles';


const MuiBasket = styled(Box)({
    fontFamily: 'Open Sans Condensed',
    textAlign: 'center',
    letterSpacing: '0.3rem',
    textTransform: 'uppercase',
    color: '#9C938E',

    '& h2': {
      marginBottom: '5vw',
      fontWeight: 'lighter',
      color: '#ad8262',
      '&:hover': {
        cursor: 'pointer',
        fontWeight: 'bolder',
        },
      '@media (max-width: 600px)': {
        marginBottom: '10vw',
        },
    },

    '& main': {
      margin: '0 10%',
      width: '80%',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',

      '& section': {
        display: 'flex',
        borderBottom: '1px dotted #ad8262',
        alignItems: 'start',

        '@media (max-width: 600px)': {
          // display: 'flex',
        },

        '& div': {
            height: 'auto',
            // border: '1px solid turquoise',

          '& img': {
            maxwidth: '20vw',
            objectFit: 'cover',
            alignSelf: 'start',
            // border: '1px solid red',
            width: '100px',
            height: '100px',
            margin: '0 auto',
            },

          '& h4': {
            letterSpacing: '0,5',
            fontSize: '1.2rem',
            textAlign: 'left',
            // border: '3px solid red',
            fontFamily: 'Amatic SC',
            fontWeight: 'lighter',
            margin: '0 1rem',
          },

          '& p' : {
            width: '80%',
            fontSize: '0.8rem',
            textAlign: 'left',
            margin: '1rem 1rem',
            letterSpacing: '0',
            textTransform: 'none',
            textWeight: 'bolder !important',
            },

          '& button': {
            fontSize: '0.5rem',
            textTransform: 'capitalize',
            textDecoration: 'underline',
            marginLeft: '10vw',
            textAlign: 'right',
            // backgroundColor: 'rgba(173,130,98,0.5)',
            fontFamily: 'Open Sans',
            fontWeight: 'bolder',
            color: '#9C938E',
            padding: '0',
            },

          '& article': {
            paddingTop: '20%',
            paddingBottom: '10%',
            textAlign: 'right',

            '@media (max-width: 600px)': {
              paddingTop: '80%',
              },
            },

          }
    },
  },
})

class ShoppingBasket extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return(
      <>
        <NavBar />
          <MuiBasket>
          <h2 onClick={this.props.makeFetch}>Deine Bestellung</h2>

          <main>
            <section>
              <div>
                <img src={require(`../content/produktfotos_ef/quadra3.jpg`)} alt="pic"></img>
              </div>
              <div>
                <h4>blablabla</h4>
                <p>By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.</p>
              </div>
              <div>
                <Button>Entfernen</Button>
                <article>3,44 EUR</article>
              </div>
            </section>
          </main>

              <main>
                <ul>
                  {this.props.basket.map((obj, index)=>{
                    return (
                      <div>
                        <li key={index}>
                          <h4>{obj.produktname}</h4>
                          <img onClick={(ev)=>console.log(ev.target.id)} src={require(`../content/produktfotos_ef/${obj.produktfotos[0]}.jpg`)} alt="pic"></img>
                          <p>{obj.produktbeschreibung}</p>
                          <p>{obj.preis} EUR</p>
                          <Button id={obj.id} onClick={this.props.removeItem}>X</Button>
                          <hr/ >
                        </li>
                      </div>
                    )
                  })}
                </ul>

                <ShopSummaryRX />
              </main>

          </MuiBasket>
      </>
    )
  }
}

export const ShoppingBasketRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingBasket);
