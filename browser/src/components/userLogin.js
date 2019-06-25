import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import { NavBar } from './navbar.js';

const MuiUserLogin = styled(Container)({

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
    paddingBottom: '1vw',
    margin: '10% 0 15% 0'
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
    },

  '& input': {
    float: 'right',
    border: 'none',
    borderBottom: '1px solid #9C938E',
    marginTop: '0.6vw',
    width: '50%',
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
  '& a': {
    float: 'right',
    marginTop: '-1vw',
    color: '#9C938E',
    fontFamily: 'Open Sans Condensed',
    '&:hover': {
      fontWeight: 'bolder',
      textDecoration: 'none',
    }
  },

})

class UserLogin extends React.Component {

  authUserLogin = (ev)=> {
  ev.preventDefault();
  this.props.loginUser(this.props.userInfo);
}

  render() {
    return (
      <>
        <NavBar />
        <MuiUserLogin>
          <form type="submit" onSubmit={this.authUserLogin}>
          <h2>Login</h2>

              <div>
                <label>Email-Adresse*</label>
                <input
                  type="email"
                  id="userVal"
                  onChange={this.props.changeInput}
                  value={this.props.userVal}
                />
              </div>
              <div>
                <label>Kennwort*</label>
                <input
                  type="password"
                  id="pwVal"
                  onChange={this.props.changeInput}
                  value={this.props.pwVal}
                /><br/><br/>
                <a href="/forgot">Kennwort vergessen?</a>
              </div>

              <span>* Pflichtfelder</span><br />

              <button type="submit">Anmelden</button>

          </form>

          <div>

          </div>
        </MuiUserLogin>
      </>
    )
  }
}

export const UserLoginRX = connect(mapStateToProps, mapDispatchToProps)(UserLogin);
  // <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Passwort vergessen?</a>
