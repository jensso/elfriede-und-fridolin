import React from 'react';
import { ProductCardStern, ProductCardMute, ProductCardTutorial } from './productCard.js';
import { Button, Box } from '@material-ui/core';
import {styled} from '@material-ui/core/styles';

const MuiBox = styled(Box)({
  display: 'flex',
  margin: '0 auto',
});

export class FreeProducts extends React.Component {
  render() {
    return (
      <MuiBox>
            <ProductCardStern />
            <ProductCardTutorial />
            <ProductCardMute />
      </MuiBox>
    )
  }
}
