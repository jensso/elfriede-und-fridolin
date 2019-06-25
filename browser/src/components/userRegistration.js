import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';
import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import { NavBar } from './navbar.js';

const MuiUserRegistration = styled(Container)({

    width: '100%',
    padding: '0 30%',
    '@media (max-width: 600px)': {
      padding: '0 10%',
    },

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
    textAlign: 'left',
    },

  '& input': {
    width: '50%',
    float: 'right',
    border: 'none',
    borderBottom: '1px solid #9C938E',
    marginTop: '0.6vw',
    color: '#ad8262',

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
      letterSpacing: '0.1rem',
      background: '#ad8262',
      textTransform: 'uppercase',
      margin: '10% 35%',
      padding: '0.4rem',

      '&:hover': {
        fontWeight: 'bolder',
        cursor: 'pointer',
        background: '#B5C4AF',
      },
      '&:focus': {
        outline: 'none',
      },
    },
})
class UserRegistration extends React.Component {

  newUserReg = (ev)=> {
    ev.preventDefault();
    this.props.createUser(this.props.newUser);
  }
  render() {
    return (
      <>
        <NavBar />
        <MuiUserRegistration>
          <form type="submit" onSubmit={this.newUserReg}>
          <h2>Registrierung</h2>
            <h5>Anmeldedaten</h5>
              <div>
                <label>Email-Adresse*</label>
                <input
                  type="email"
                  id="email"
                  onChange={this.props.changeInput}
                  value={this.props.inputEmail}
                />
              </div>
              <div>
                <label>Kennwort*</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.props.changeInput}
                  value={this.props.inputPassword}
                />
              </div>
              <div>
                <label>Kennwortbestätigung*</label>
                <input
                  type="password"
                  id="pwAgain"
                  onChange={this.props.changeInput}
                  value={this.props.inputPasswordAgain}
                />
              </div>
              <span>* Pflichtfelder</span><br />

            <h5>Adressdaten</h5>
            <div>
              <label>Vorname*</label>
              <input
                type="text"
                id="vorname"
                onChange={this.props.changeInput}
                value={this.props.inputVorname}
              />
            </div>
            <div>
              <label>Name*</label>
              <input
                type="text"
                id="name"
                onChange={this.props.changeInput}
                value={this.props.inputName}
              />
            </div>
            <div>
              <label>Straße*</label>
              <input
                type="text"
                id="str"
                onChange={this.props.changeInput}
                value={this.props.inputStrasse}
              />
            </div>
            <div>
              <label>HausNr.*</label>
              <input
                type="text"
                id="hausnr"
                onChange={this.props.changeInput}
                value={this.props.inputHausNr}
              />
            </div>
            <div>
              <label>PLZ*</label>
              <input
                type="text"
                id="plz"
                onChange={this.props.changeInput}
                value={this.props.inputPLZ}
              />
            </div>
            <div>
              <label>Ort*</label>
              <input
                type="text"
                id="ort"
                onChange={this.props.changeInput}
                value={this.props.inputOrt}
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
export const UserRegistrationRX = connect(mapStateToProps,mapDispatchToProps)(UserRegistration);
