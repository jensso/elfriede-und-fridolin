import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
// you need to import the img from the relative path in order to use them
import Logo from '../content/images/logo.jpg';
import home_1 from '../content/images/home_1.jpg';
import home_2 from '../content/images/home_2.jpg';

const MuiLandingPage= styled(Container)({
    display: 'flex',
    position: 'relative',
  '& div': {
  '&:nth-of-type(1)': {
    margin: '0.4vw',
    backgroundImage: `url(${home_1})`,
    backgroundSize: 'cover',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(2)': {
    margin: '0.4vw',
    backgroundImage: `url(${home_2})`,
    backgroundSize: 'cover',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(3)': {
    backgroundSize: '100% 100%',
    border: '0.2vw dotted white',
    paddingBottom: '2vw',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    top: '35%',
    left: '25%',
  },
  '&:nth-of-type(4)': {
    backgroundSize: '100% 100%',
    backgroundColor: 'white',
    width: '44%',
    height: '28%',
    position: 'absolute',
    top: '36%',
    left: '25.5%',
  },
  '& h2': {
    fontFamily: 'Amatic SC',
    color: '#AD8262',
    fontSize: '4rem',
    '@media (max-width: 600px)': {
      fontSize: '2rem'
    },
    fontWeight: 'lighter',
    margin: '1vw 1vw',
    backgroundSize: '100% 100%',
    position: 'relative',
    zIndex: '100',
  },
  '& p': {
    fontFamily: 'Open Sans Condensed',
    color: 'black',
    fontSize: '1rem',
    '@media (max-width: 600px)': {
      fontSize: '0.6rem'
    },
    fontWeight: 'lighter',
    letterSpacing: 4.5,
    margin: '0',
    position: 'relative',
    zIndex: '100',
    marginTop: '-2vw'
  },
},
});


export class LandingPage extends React.Component {
  render() {
    return (
      <MuiLandingPage>
        <div></div>
        <div></div>
        <div>
          <h2>Elfriede & Fridolin</h2>
          <p>SELBSTgenäht</p>
        </div>
        <div></div>
      </MuiLandingPage>
    )
  }
}
