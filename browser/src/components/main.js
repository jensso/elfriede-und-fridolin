import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
// you need to import the img from the relative path in order to use them
import Mickey from '../content/images/Mickey_Mouse.jpg';
import Minnie from '../content/images/Minnie_Mouse.png';
import Logo from '../content/images/logo.jpg';

const MuiLandingPage= styled(Container)({
    display: 'flex',
    position: 'relative',
  '& div': {
  '&:nth-of-type(1)': {
    backgroundImage: `url(${Mickey})`,
    backgroundSize: '100% 100%',
    transform: 'scaleX(-1)',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(2)': {
    backgroundImage: `url(${Minnie})`,
    backgroundSize: '100% 100%',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(3)': {
    background: 'lightblue',
    padding: '1vw 2vw',
    backgroundImage: `url(${Logo})`,
    backgroundSize: '100% 100%',
    border: '0.5vw double grey',
    width: '50%',
    height: '33%',
    position: 'absolute',
    top: '30%',
    left: '25%',
    '&:hover': {
      opacity: '0.2',
    },
  },
},
});


export class LandingPage extends React.Component {
  render() {
    return (
      <MuiLandingPage>
        <div></div>
        <div></div>
        <div></div>
      </MuiLandingPage>
    )
  }
}
