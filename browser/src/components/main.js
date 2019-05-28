import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';

const MyLandingPage= styled(Container)({
  display: 'flex',
  border: '0.2vw solid silver',
  '& div': {
  '&:nth-of-type(1)': {
    background: 'red',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(2)': {
    background: 'green',
    width: '50%',
    height: '50vw',
  },
  '&:nth-of-type(3)': {
    background: 'lime',
    width: '50%',
    height: '25vw',
    position: 'absolute',
    top: '25%',
    left: '25%',
    '&:hover': {opacity: '0.3'},
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
