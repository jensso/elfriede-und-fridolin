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
        },
        '& i': {
          fontSize: '3rem',
        }
      }

  },

  '& main': {
    display: 'flex',
    flexWrap: 'wrap',
    width: '90%',
    margin: '0 auto',
    color: '#9c938e',

    '@media (max-width: 600px)': {
      flexWrap: 'wrap',
      width: '100%',
    },

    '& div': {
      margin: '1rem 0.5rem',
      display: 'flex',
      flexGrow: '1',
      alignItems: 'center',
      flexDirection: 'column',
      width: '26.33%',
      '@media (max-width: 600px)': {
        width: '100%',
      },

      '& h3': {
        fontFamily: 'Amatic SC',
        fontWeight: 'lighter',
        textAlign: 'center',
        fontSize: '1.5rem',
        margin: '0',
        letterSpacing: '0.2rem',
        },

      '& h5': {
        fontFamily: 'Open Sans Condensed',
        fontWeight: 'bolder',
        letterSpacing: '0.2rem',
        marginBottom: '0',
        },

      '& img': {
        width: '30vw',
        height: '20vw',
        objectFit: 'cover',
        maxWidth: '90%',
        margin: '1rem auto',
        // padding: '0.3rem',
          },

      '& p' : {
        fontSize: '0.7rem',
        fontFamily: 'Open Sans',
        color: '#9C938E',
        textAlign: 'left',
        margin: '0 1rem',
      },

      '& button': {
        border: 'none',
      },

      '& div': {
        marginLeft: '0',
        marginRight: '0',
      },

        '&:nth-child(1)': {
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

        '&:nth-child(2n+2)': {
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

          '& h3, h5, p, span': {
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

        '&:nth-child(3n+3)': {
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

class Clothes extends React.Component {
  componentDidMount() {
    this.props.fetchClothes();
  }

  render() {
    return (
      <>
        <NavBar />
          <MuiBox>
            <section>
              <h2 onClick={this.props.fetchClothes}>Kleidung</h2>
              <div>
                <Button onClick={this.props.filterClothes}>Damen</Button>
                <span>|</span>
                <Button onClick={this.props.filterClothes}>Kinder</Button>
                <span>|</span>
                <Button onClick={this.props.filterClothes}>Accessoires</Button>
              </div>
            </section>

            <main>
              {this.props.shownClothes.map((obj, index)=>
                <div key={index}>
                  <section>
                      <h3>{obj.produktname}</h3>
                      <h5>{obj.produktTyp}</h5>
                      <img onClick={(ev)=>console.log(obj.id)} src={require(`../content/produktfotos_ef/${obj.produktfotos[this.props.next]}.jpg`)} alt={`pic of ${obj.produktname}`}></img>
                      <p>{obj.produktbeschreibung}</p>
                      <div id={obj.id}>
                       <span>{(obj.preis).toFixed(2)} €</span>
                       <button id={obj.id} onClick={this.props.buyClothes}>
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
export const ClothesRX = connect(mapStateToProps,mapDispatchToProps)(Clothes);
