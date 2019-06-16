import React from 'react';
import { styled } from '@material-ui/styles';
import {Box,Button} from '@material-ui/core';
import mood_livi from '../content/images/mood_livi.jpg';
import { NavBar } from './navbar.js';

const patterns = [
  {name: 'Oversized Sweater Maxima | Gr. 34-52',
  price: 7.95,
  description: 'Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.',
  category: 'Damen'
  },
  {name: 'Oversized Sweater Maxima | Gr. 34-52',
  price: 17.95,
  description: 'Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.',
  category: 'Kinder'
  },
  {name: 'Oversized Sweater Maxima | Gr. 34-52',
  price: 6.99,
  description: 'Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.',
  category: 'Accessoires'
  }
];

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

        '&:nth-of-type(2)': {
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
  constructor(props) {
    super(props);
    this.state = {
      products: patterns,
      basket: [],
    }
  }
  componentDidMount() {

  fetch('http:/localhost:4000/patterns/getPatterns', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  }).then (res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

  }

  handleFilter(ev) {
    const copyPatterns = [...patterns];
    const shownPatterns = copyPatterns.filter((obj)=> {
      return obj.category.toLowerCase() === ev.target.innerText.toLowerCase();
    })
    this.setState({
      products: shownPatterns
    })
  }
  showAll(ev) {
     const shownPatterns = [...patterns];
     this.setState({products: shownPatterns})
    }
    buyItem(ev) {
      console.log(patterns);
      this.state.basket.push(patterns[0]);
      console.log(this.state.basket);
    }

  render() {
    return (
      <>
        <NavBar />
          <MuiBox>
            <section>
              <h2 onClick={this.showAll.bind(this)}>Schnittmuster</h2>
              <div>
                <Button onClick={this.handleFilter.bind(this)}>Damen</Button>
                <span>|</span>
                <Button onClick={this.handleFilter.bind(this)}>Kinder</Button>
                <span>|</span>
                <Button onClick={this.handleFilter.bind(this)}>Accessoires</Button>
              </div>
            </section>

            <main>
              {this.state.products.map((obj, index)=>
                <div>
                  <h5>{obj.name}</h5>
                  <section key={index}>
                    <img src={mood_livi} alt="#"></img>
                     <p>{obj.description}</p>
                      <div>
                       <span>{obj.price}</span>
                       <button onClick={this.buyItem.bind(this)}>
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
