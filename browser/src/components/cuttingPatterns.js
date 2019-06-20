import React from 'react';
import { styled } from '@material-ui/styles';
import {Box,Button} from '@material-ui/core';
import { NavBar } from './navbar.js';
import { connect } from 'react-redux';
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

export class CuttingPatterns extends React.Component {
  componentDidMount() {
    this.props.fetchPatterns();
  }

  render() {
    return (
      <>
        <NavBar />
          <MuiBox>
            <section>
              <h2 onClick={this.props.fetchPatterns}>Schnittmuster</h2>
              <div>
                <Button onClick={this.props.filterPatterns}>Damen</Button>
                <span>|</span>
                <Button onClick={this.props.filterPatterns}>Kinder</Button>
                <span>|</span>
                <Button onClick={this.props.filterPatterns}>Accessoires</Button>
              </div>
            </section>

            <main>
              {this.props.shownPatterns.map((obj, index)=>
                <div key={index}>
                  <h5>{obj.produktname}</h5>
                  <section>
                      <img onClick={(ev)=>console.log(obj.id)} src={require(`../content/produktfotos_ef/${obj.produktfotos[this.props.next]}.jpg`)} alt={`pic of ${obj.produktname}`}></img>
                      <h5>{obj.produktTyp}</h5>
                      <p>{obj.produktbeschreibung}</p>
                      <div id={obj.id}>
                       <span>{(obj.preis).toFixed(2)} €</span>
                       <button id={obj.id} onClick={this.props.buyPatterns}>
                         <i className="material-icons">&#xe8cc;</i>
                       </button>
                      </div>
                  </section>
                </div>
              )}
            </main>
        </MuiBox>
      </>
    )
  }
}
export const CuttingPatternsRX = connect(mapStateToProps,mapDispatchToProps)(CuttingPatterns)
