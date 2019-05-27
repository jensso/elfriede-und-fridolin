import React from 'react';
import MyImpressum from './impressum.js';
import AllGesBed from './agb.js';
import Datenschutz from './datenschutz.js';
import Widerruf from './widerruf.js';
import { styled } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const MyBottomNavigation= styled(BottomNavigation)({
  background: 'lightblue',
  border: '0.2vw solid silver',
  borderRadius: '1vw',
});

export class Footer extends React.Component {

  render() {
    return(
      <>
      <MyBottomNavigation>
          <MyImpressum />
          <AllGesBed />
          <Datenschutz />
          <Widerruf />
      </MyBottomNavigation>
      </>
    )
  }
}
