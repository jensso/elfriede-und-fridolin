import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import footer1 from '../content/images/footer_1.jpg';
import footer2 from '../content/images/footer_2.jpg';
import footer3 from '../content/images/footer_3.jpg';

const MuiContactFooter = styled(Container)({
  display: 'flex',
  color: '#753',
  margin: '2vw auto',
  padding: '1vw',
  fontFamily: 'Amatic SC',
  '& div': {
    '&:nth-of-type(1)': {
      width: '40%',
      '& section': {
        '&:first-of-type': {
          border: '0.2vw dotted #bda96c',
          width: '80%',
          margin: '2vw auto',
          '& p': {
            fontFamily: 'tahoma',
            fontWeight: 'bolder',
            },
          '& span': {
            fontFamily: 'tahoma',
          },
        },
        '&:last-of-type': {
          '& a': {
            margin: '0.5vw 1.5vw',
            fontSize: '2.5vw',
            '& i': {
              color: '#b5c4af',
              '&:hover': {
                color: '#000'},
            },
          },
        },
      },
    },
    '&:nth-of-type(2)': {
      width: '60%',
      '& section': {
        background: '#bda96c',
      },
      '& img': {
        width: '25%',
        margin: '1vw',
        padding: '1vw',
      },
    },
  },
});
export class ContactFooter extends React.Component {
  render() {
    return (
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
          </section>
        </div>
        <div>
          <h2>Instagram</h2>
          <section>
            <img src={footer1} alt="pic"></img>
            <img src={footer2} alt="pic"></img>
            <img src={footer3} alt="pic"></img>
          </section>
        </div>
      </MuiContactFooter>
    )
  }
}
