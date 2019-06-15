import React from 'react';
import { styled } from '@material-ui/styles';
import {Box,Button} from '@material-ui/core';
import Minnie from '../content/images/Minnie_Mouse.png';
import { NavBar } from './navbar.js';
// import { connect } from 'react-redux';
// import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

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
    flexWrap: 'wrap',
    margin: '2vw auto',
  '& section': {
    display: 'flex',
    padding: '1vw',
    margin: '0.5vw',
    border: '0.5vw dotted #bda96c',
    width: '20%',
    '&:nth-of-type(even)': {
      background: '#ad8262',
      '& span': {
        color: 'white',
      }

    },
    '& img': {
      width: '60%',
      height: '60%',
      padding: '0.2vw',
      border: '0.1vw solid #999',
      background: '#b5c4af',
    },
    '& div': {
      padding: '0.4vw 1vw',
      display: 'flex',
      flexDirection: 'column',
      '& h5': {
        fontFamily: 'Amatic SC',
        fontSize: '1.5vw',

      },
      '& p': {
        textAlign: 'justify',
        fontFamily: 'Amatic SC',
        fontSize: '1vw',
        flexGrow: '1',
      },
      '& span': {
        color: 'grey',
        fontSize: '1vw',
      },

    },
  },
},
})

export class NewsSection extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <MuiBox>
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
      </>
    )
  }
}
