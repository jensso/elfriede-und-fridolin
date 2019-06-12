import React from 'react';
import { styled } from '@material-ui/styles';
import {Box,Button} from '@material-ui/core';
import Minnie from '../content/images/Minnie_Mouse.png';
import { NavBar } from './navbar.js';

const MuiBox = styled(Box)({
  '& h2': {
    fontFamily: 'Amatic SC',
    margin: '4vw',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  '& a': {
    padding: '2vw',
    margin: '4vw',
    color: '#bda96c',
    textDecoration: 'none',
  },
  '& main': {
    display: 'flex',
    margin: '2vw auto',
  '& section': {
    display: 'flex',
    padding: '2vw',
    margin: '2vw auto',
    border: '0.2vw dotted #bda96c',
    width: '30%',
    '&:nth-of-type(2)': {
      background: '#ad8262',
    },
    '& img': {
      width: '40%',
      padding: '0.4vw',
      border: '0.1vw solid #999',
      background: '#b5c4af',
    },
    '& div': {
      padding: '0.4vw 1vw',
      display: 'flex',
      flexDirection: 'column',
      '& h5': {
        fontFamily: 'Amatic SC',
      },
      '& p': {
        textAlign: 'justify',
      }
    },
  },
},
})

export class NewsSection extends React.Component {
  render() {
    return (
      <MuiBox>
        <NavBar />
        <h2>NEWS</h2>
        <Button>Neuzugänge</Button>
        |
        <Button>Info</Button>
        |
        <Button>Angebote</Button>
        <main>
          <section>
            <img src={Minnie}  alt="#"></img>
            <div>
                <h5>Oversized Sweater Maxima</h5>
                <p>some text to provide.some text to provide.some text to provide.some text to provide.some text to provide.</p>
                <span>€ 6,90</span><i className="material-icons">&#xe8cc;</i>
              </div>
          </section>
          <section>
            <img src={Minnie} alt="#"></img>
            <div>
                <h5>Oversized Sweater Maxima</h5>
                <p>some text to provide.some text to provide.some text to provide.some text to provide.some text to provide.</p>
                <span>€ 6,90</span><i className="material-icons">&#xe8cc;</i>
              </div>
          </section>
          <section>
            <img src={Minnie} alt="#"></img>
            <div>
                <h5>Oversized Sweater Maxima</h5>
                <p>some text to provide.some text to provide.some text to provide.some text to provide.some text to provide.</p>
                <span>€ 6,90</span><i className="material-icons">&#xe8cc;</i>
              </div>
          </section>
        </main>
      </MuiBox>
    )
  }
}
