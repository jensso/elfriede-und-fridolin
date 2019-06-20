import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import Markise from '../content/images/mood_markise.jpg';
import Livi from '../content/images/mood_livi.jpg';
import Zebra from '../content/images/mood_zebra.jpg';
import watercolour_green from '../content/images/watercolour_green.png';

const MuiContactFooter = styled(Container)({
  display: 'flex',
  '@media (max-width: 600px)': {
    flexWrap: 'wrap',
  },

  color: '#9c938e',
  margin: '2vw auto',
  padding: '1vw',
  fontFamily: 'Amatic SC',
  textAlign: 'center',
    '& div': {

      '& h2': {
        fontWeight: 'lighter'
      },

      '&:nth-of-type(1)': {
        // width: '40%',
        flexGrow: '1',
        '& section': {

          '&:nth-of-type(1)': {

            border: '0.2vw dotted #AD8262',
            width: '80%',
            margin: '2vw auto',
            padding: '1vw',

            '& p': {
              fontFamily: 'Open Sans Condensed',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 'bolder',
              },

            '& span': {
              '&:first-of-type' : {
              fontFamily: 'Open Sans Condensed',
              textTransform: 'uppercase',
              },
              '&:nth-of-type(2)' : {
              fontFamily: 'Open Sans Condensed'
              },
            },
        },

          '&:nth-of-type(2)': {

            '& img': {
              width: '50%',
              position: 'relative',
              marginTop: '-8%',
              marginLeft: '30%',
              marginRight: '20%',
              zIndex: '-1',
              opacity: '0.5',
              },

              '& a': {
                margin: '0 3%',
                fontSize: '180%',
                color: '#9c938e',
              },


          },
        },
      },


      '&:nth-of-type(2)': {
        width: '400%',
        // flexGrow: '2',
        '& section': {
          background: '#AD8262',
          width: '70%',
          margin: '0 auto',

          '@media (min-width: 600px)': {
            width: '100%',
          },

          '& img': {
            maxWidth: '100%',
            objectFit: 'cover',
            width: '30%',
            height: '20vw',
            // margin: '1vw 1vw',
            padding: '1vw',
          },
        },
      },

    },
});
export class ContactFooter extends React.Component {
  render() {
    return (
      <>
        <MuiContactFooter>
          <div>
            <h2>Kontakt</h2>
            <section>
              <p>Elfriede und Fridolin®</p>
              <span><i>Antje Abeler</i></span><br/><br/>
              <span>www.elfriede-und-fridolin.de</span>
              <p>elfriede-und-fridolin@gmx.de</p>
            </section>
            <h2>Folge Mir:</h2>
            <section>
              <a href="https://www.facebook.com"><i className='fab'>&#xf09a;</i></a>
              <a href="https://www.instagram.de"><i className='fab'>&#xf16d;</i></a>
              <a href="https://www.pinterest.de"><i className='fab'>&#xf0d2;</i></a>
              <img src={watercolour_green} alt="watercolour_green"></img>
            </section>
          </div>
          <div>
            <h2>Instagram</h2>
            <section>
              <img src={Livi} alt="pic"></img>
              <img src={Markise} alt="pic"></img>
              <img src={Zebra} alt="pic"></img>
            </section>
          </div>
        </MuiContactFooter>
      </>
    )
  }
}
