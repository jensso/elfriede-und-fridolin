import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import ImgMediaCard from './productCard.js';

const MuiNavGallery= styled(Container)({
  display: 'flex',
  color: '#753',
  margin: '1vw',
  padding: '1vw',
  fontFamily: 'Amatic SC',
});

export class NavGallery extends React.Component {
  render() {
    return (
      <MuiNavGallery>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </MuiNavGallery>
    )
  }
}
