import React from 'react';
import Impressum from './impressum.js';
import AllGesBed from './agb.js';
import Datenschutz from './datenschutz.js';
import Widerruf from './widerruf.js';
// import SocialMedia from './socialmedia.js';
import { styled } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';


const MuiBottomNavigation= styled(BottomNavigation)({
  display: 'flex',
  background: 'white',
  margin: '0 auto',
  '& div': {
    margin: '1vw auto',
    '& button': {
      fontSize: '2vw',
      fontFamily: 'Amatic SC',
      fontWeight: 'lighter',
      color: '#AD8262',
      border: 'none',
      '&:hover': {
        background: 'white',
        fontWeight: 'bolder',
        border: 'none',
      }
    },
  }
});

export class Footer extends React.Component {

  render() {

    return(
      <MuiBottomNavigation>
          <Impressum />
          <AllGesBed />
          <Datenschutz />
          <Widerruf />
      </MuiBottomNavigation>
    )
  }
}
