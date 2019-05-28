import React from 'react';
import Impressum from './impressum.js';
import AllGesBed from './agb.js';
import Datenschutz from './datenschutz.js';
import Widerruf from './widerruf.js';
import SocialMedia from './socialmedia.js';
import { styled } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';


const MyBottomNavigation= styled(BottomNavigation)({
  background: '#753',
  border: '0.2vw solid silver',
  margin: '1vw auto',
  '& div': {
    margin: '1vw auto',
    '& button': {
      fontSize: '0.5vw',
      fontFamily: 'courier',
      color: 'white',
      border: 'none',
      '&:hover': {
        background: 'white',
        color: '#753',
      }
    },
  }
});

export class Footer extends React.Component {

  render() {

    return(
      <>
      <SocialMedia />
      <MyBottomNavigation>
          <Impressum />
          <AllGesBed />
          <Datenschutz />
          <Widerruf />
      </MyBottomNavigation>
      </>
    )
  }
}
