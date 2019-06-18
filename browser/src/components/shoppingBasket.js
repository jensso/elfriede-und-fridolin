import React from 'react';
import {Box,Button} from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { NavBar } from './navbar.js';
import { connect } from 'react-redux';
import { ShopSummaryRX } from './shopSummary.js';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

const MuiBox = styled(Box)({
  '& section': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',

      '& h2': {
        fontFamily: 'Open Sans Condensed',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        letterSpacing: '0.5rem',
        color: '#ad8262',
        '&:hover': {
          cursor: 'pointer',
          fontWeight: 'bolder',
        }
      },

      '& span': {
        fontFamily: 'Open Sans Condensed',
        fontWeight: 'bolder',
        textTransform: 'capitalize',
        letterSpacing: '0.2rem',
        margin: '0 1rem',
        fontSize: '0.8rem',
        color: '#9C938E',

        '&:hover': {
          color: '#B5C4AF',
        },
        '&:active': {
          color: '#B5C4AF',
        },
      },

      '& button': {
        backgroundColor: 'rgba(0, 0, 0, 0.00)',
        color: '#9C938E',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.00)',
          cursor: 'pointer',
          color: '#B5C4AF',
          },
        '&:focus': {
          outline: 'none',
          }
      }

  },

  '& main': {
    display: 'flex',
    width: '100%',
    margin: '0 auto',

    '@media (max-width: 600px)': {
      flexWrap: 'wrap',
    },

    '& div': {
      display: 'flex',
      flexGrow: '1',
      alignItems: 'center',
      flexDirection: 'column',
      width: '33.33%',
      margin: '1rem 2rem',

      '& h5': {
        fontFamily: 'Amatic SC',
        textAlign: 'center',
        fontSize: '0.rem',
        letterSpacing: '0.1rem',
        color: '#ad8262',
        },

      '& img': {
        maxWidth: '90%',
        margin: '1rem auto',
        // padding: '0.3rem',
          },

      '& p' : {
        fontSize: '0.5rem',
        fontFamily: 'Open Sans',
        color: '#9C938E',
        textAlign: 'left',
        margin: '1rem 1rem',
      },

      '& button': {
        border: 'none',
      },

      '& div': {
        marginLeft: '0',
        marginRight: '0',
      },

        '&:nth-of-type(1)': {
          '& section': {
          outline: '0.1rem dotted #ad8262',
          outlineOffset: '0.2rem',

          '& div': {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          },

          '& span': {
            '&:hover': {
              color: '#9C938E',
            }
          }

        },
      },

        '&:nth-of-type(even)': {
          '& section': {
          backgroundColor: '#ad8262',
          marginTop: '-0.2rem',
          paddingTop: '0.2rem',

          '& div': {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          },

          '& p, span': {
            color: 'white',
          },

          '& button': {
            color: 'white',
            '&:hover': {
              color: '#B5C4AF',
            }
          }
        },
      },

        '&:nth-of-type(3)': {
          '& section': {
          outline: '0.1rem solid #ad8262',
          outlineOffset: '0.2rem',

          '& div': {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          },

          '& span': {
            '&:hover': {
              color: '#9C938E',
            }
          }
        },
      },

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
          <MuiBox>
            <section>
              <h2 onClick={this.props.makeFetch}>Deine Bestellung</h2>
            </section>

            <main>

              {this.props.basket.map((obj, index)=>{
                return (
                  <div>
                    <li key={index}>
                      <Button id={obj.id} onClick={this.props.removeItem}>X</Button>
                      <img onClick={(ev)=>console.log(ev.target.id)} src={require(`../content/images/${obj.produktfotos[0]}.jpg`)} alt="pic"></img>
                      <div>
                        <p>{obj.produktname}</p>
                        <p>{obj.produktbeschreibung}</p>
                        <p>{obj.preis}</p>
                        <hr/ >
                        <p>{obj.id}</p>
                      </div>
                    </li>
                  </div>
                )
              })}

          <ShopSummaryRX />

        </main>
      </MuiBox>
      </>
    )
  }
}

export const ShoppingBasketRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingBasket);
