import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import Minnie from '../content/images/Minnie_Mouse.png';


const MuiNavHome= styled(Container)({
  color: '#753',
  margin: '2vw auto',
  fontFamily: 'Amatic SC',
  '& section': {
    display: 'flex',
    '& div': {
      width: '50%',
      margin: '2vw',
      '& h4': {
        textAlign: 'center',
      },
      '& p': {
        fontFamily: 'Open Sans Condensed',
        textAlign: 'left',
      },
      '& a': {
        textDecoration: 'none',
      }
    }
  }
});

export class NavHome extends React.Component {
  render() {
    return (
      <MuiNavHome>
      <h4>...eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich dem süßen Frühling...</h4>
      <section>
          <div>
            <img src={Minnie} alt="not available"></img>
            <img src={Minnie} alt="not available"></img>
          </div>
          <div>
            <h4>MOIN!</h4>
            <p>eine wunderbare Heiterkeit hat meine ganze Seele eingenommen<br/>, gleich dem süßen Frühling</p>
            <br/>
            <p>eine wunderbare Heiterkeit hat meine ganze Seele eingenommen<br/>, gleich dem süßen Frühling</p>
            <a href="https://www.google.com">hier erfährst Du mehr über mich</a>
          </div>
        </section>
      </MuiNavHome>
    )
  }
}
