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
    backgroundImage: `url(${home_1})`,
    backgroundSize: '100% 100%',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(2)': {
    backgroundImage: `url(${home_2})`,
    backgroundSize: '100% 100%',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(3)': {
    background: '#9c938e',
    padding: '1vw 2vw',
    backgroundImage: `url(${Logo})`,
    backgroundSize: '100% 100%',
    border: '0.5vw double white',
    width: '50%',
    height: '33%',
    position: 'absolute',
    top: '30%',
    left: '25%',
    '&:hover': {
      opacity: '0.8',
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
