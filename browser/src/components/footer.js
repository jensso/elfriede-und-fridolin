import React from 'react';
import Impressum from './impressum.js';
import AllGesBed from './agb.js';
import Datenschutz from './datenschutz.js';
import Widerruf from './widerruf.js';


export class Footer extends React.Component {
  render() {
    return(
      <>
        <Impressum />
        <AllGesBed />
        <Datenschutz />
        <Widerruf />
      </>
    )
  }
}
