import React from 'react';
import { styled } from '@material-ui/styles';
import {Box,Button} from '@material-ui/core';
import { NavBar } from './navbar.js';
// import { connect } from 'react-redux';
// import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

const MuiBox = styled(Box)({
  textAlign: 'center',
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
    color: '#ad8262',
    display: 'flex',
    margin: '0.5vw',
    border: '0.6vw dotted red',
    padding: '1.5vw',
    '& img': {
      width: '30%',
      height: '20%',
      padding: '2vw',
      border: '0.2vw solid red',
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
        padding: '1vw',
      },
      '& b': {
        color: 'green',
        background: 'white',
        border: '0.2vw solid lime',
        width: '50%',
        padding: '1vw 0',
        borderRadius: '50%',
        zIndex: '2',
      },
      '& span': {
        color: 'white',
        background: 'salmon',
        fontSize: '2vw',
        margin: '-0.1vw',
        padding: '0 2vw 0vw 1vw',
        transform: 'skew(-45deg,15deg)',
        textDecoration: 'line-through #755',
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
            <img src={require('../content/images/logo.jpg')} alt="produktfoto"></img>
            <div>
                <h5>Oversized Sweater Maxima</h5>
                <p>some text to provide.some text to provide.some text to provide.some text to provide.some text to provide.</p>
                <b>€ 4, - </b>
                <span>€ 6,90</span><i className="material-icons">&#xe8cc;</i>
              </div>
          </section>
          <section>
            <img src={require('../content/images/logo.jpg')} alt="produktfoto"></img>
            <div>
                <h5>Oversized Sweater Maxima</h5>
                <p>some text to provide.some text to provide.some text to provide.some text to provide.some text to provide.</p>
                <b>€ 3,99</b>
                <span>€  6,90</span><i className="material-icons">&#xe8cc;</i>
              </div>
          </section>
          <section>
            <img src={require('../content/images/logo.jpg')} alt="produktfoto"></img>
            <div>
                <h5>Oversized Sweater Maxima</h5>
                <p>some text to provide.some text to provide.some text to provide.some text to provide.some text to provide.</p>
                <b>€ 4, - </b>
                <span>€ 6,90</span><i className="material-icons">&#xe8cc;</i>
              </div>
          </section>
        </main>
      </MuiBox>
      </>
    )
  }
}
