import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
// you need to import the img from the relative path in order to use them
// import Logo from '../content/images/logo.jpg';
import home_1 from '../content/images/home_1.jpg';
import home_2 from '../content/images/home_2.jpg';

const MuiLandingPage= styled(Container)({
  '& section' : {
    '&:nth-of-type(1)': {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',

    '& div': {
      '&:nth-of-type(1)': {
        margin: '0.4vw',
        backgroundImage: `url(${home_1})`,
        backgroundSize: 'cover',
        width: '50%',
        height: '50vw',
        '@media (max-width: 600px)': {
            height: '80vw',
          },
      },
      '&:nth-of-type(2)': {
        margin: '0.4vw',
        backgroundImage: `url(${home_2})`,
        backgroundSize: 'cover',
        width: '50%',
        height: '50vw',

        '@media (max-width: 600px)': {
            height: '80vw',
          },
        },

      '&:nth-of-type(3)': {
        backgroundColor: 'white',
        outline: '1px dotted white',
        outlineOffset: '1vw',
        position: 'absolute',
        left: '25%',
        width: '50%',
        height: 'auto',
        '@media (max-width: 600px)': {
          width: '90%',
          left: '7%'
        },

        '& div': {
          backgroundColor: 'red',
          position: 'absolute',
          zIndex: '1000',
          left: '10%',
          width: '25%',
          height: 'auto',
          },
        },



      '& h2': {
        fontFamily: 'Amatic SC',
        color: '#AD8262',
        fontSize: '4rem',
        '@media (max-width: 600px)': {
          fontSize: '2.5rem'
        },
        fontWeight: 'lighter',
        margin: '1vw 1vw',
        backgroundSize: '100% 100%',
        position: 'relative',
        zIndex: '100',
      },
      '& p': {
        fontFamily: 'Open Sans Condensed',
        color: '#9c938e',
        fontSize: '1rem',
        '@media (max-width: 600px)': {
          fontSize: '1rem',
          letterSpacing: 1.5
        },
        fontWeight: 'lighter',
        letterSpacing: 3.5,
        margin: '1vw',
        position: 'relative',
        zIndex: '100',
        marginTop: '-2vw'
        },

      },
    },
  },
});


export class LandingPage extends React.Component {
  render() {
    return (
      <MuiLandingPage>
      <section>
        <div></div>
        <div></div>
        <div>
            <h2>Elfriede & Fridolin</h2>
            <p>SELBSTgenäht</p>
            <div></div>
        </div>

      </section>
      </MuiLandingPage>
    )
  }
}
