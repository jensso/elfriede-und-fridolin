import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import { NavBar } from './navbar.js';

const MuiUserRegistration = styled(Container)({

    width: '60%',

  '& h2': {
    fontFamily: 'Open Sans Condensed',
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    color: '#ad8262',
    letterSpacing: '0.3rem',
    textAlign: 'center',
    // borderBottom: '1px solid #9C938E',
    paddingBottom: '0.5vw',
    },

    '& h5': {
      fontFamily: 'Open Sans Condensed',
      fontSize: '1rem',
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      color: '#9C938E',
      letterSpacing: '0.2rem',
      // fontFamily: 'Open Sans Condensed',
      // textTransform: 'uppercase',
      // fontWeight: 'lighter',
      // color: '#ad8262',
      // letterSpacing: '0.3rem',
      textAlign: 'center',
      },

  '& div': {
    margin: '1.3vw 0',

    '& label': {
    fontFamily: 'Open Sans Condensed',
    fontSize: '0.8rem',
    // textTransform: 'capitalize',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    color: '#9C938E',
    letterSpacing: '0.2rem',
    },

  '& input': {
    float: 'right',
    border: 'none',
    borderBottom: '1px solid #9C938E',
    margin: '0.3vw 0',
    },
  },


  '& span': {
    color: '#9C938E',
    fontSize: '1vw',
    },

  '& button': {
    fontSize: '1rem',
    color: 'white',
    fontFamily: 'Open Sans Condensed',
    // fontWeight: 'bolder',
    letterSpacing: '0.1rem',
    background: '#ad8262',
    textTransform: 'uppercase',
    margin: '5% 35%',
    '&:hover': {
      background: '#B5C4AF',
    },
    '&:focus': {
      outline: 'none',
    },
  },
})
export class UserRegistration extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <MuiUserRegistration>
          <form>
          <h2>Registrierung</h2>
            <h5>Anmeldedaten</h5>
              <div>
                <label>Email-Adresse*</label>
                <input
                  type="email"
                />
              </div>
              <div>
                <label>Kennwort*</label>
                <input
                  type="password"
                />
              </div>
              <div>
                <label>Kennwortbestätigung*</label>
                <input
                  type="password"
                />
              </div>
              <span>* Pflichtfelder</span><br />

            <h5>Adressdaten</h5>
            <div>
              <label>Vorname*</label>
              <input
                type="text"
              />
            </div>
            <div>
              <label>Name*</label>
              <input
                type="text"
              />
            </div>
            <div>
              <label>Straße*</label>
              <input
                type="text"
              />
            </div>
            <div>
              <label>HausNr.*</label>
              <input
                type="text"
              />
            </div>
            <div>
              <label>PLZ*</label>
              <input
                type="text"
              />
            </div>
            <div>
              <label>Ort*</label>
              <input
                type="text"
              />
            </div>
            <span>* Pflichtfelder</span>

            <div>
              <button type="submit">Registrieren</button>
            </div>

          </form>
        </MuiUserRegistration>
      </>
    )
  }
}
