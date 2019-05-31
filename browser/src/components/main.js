import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
// you need to import the img from the relative path in order to use them
import Image from '../content/images/example.jpg';
import Logo from '../content/images/logo.jpg';

const MyLandingPage= styled(Container)({
    display: 'flex',
    position: 'relative',
  '& div': {
  '&:nth-of-type(1)': {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    transform: 'scaleX(-1)',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(2)': {
    backgroundImage: `url(${Image})`,
    backgroundSize: '100% 100%',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(3)': {
    background: 'white',
    backgroundImage: `url(${Logo})`,
    backgroundSize: '100% 100%',
    border: '0.5vw double grey',
    width: '50%',
    height: '33%',
    position: 'absolute',
    top: '30%',
    left: '25%',
    '&:hover': {
      opacity: '0.5',
    },
  },
},
});


export class LandingPage extends React.Component {
  render() {
    return (
      <MyLandingPage>
        <div></div>
        <div></div>
        <div></div>
      </MyLandingPage>
    )
  }
}
