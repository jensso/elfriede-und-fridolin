import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';
import Box from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { NavBar } from './navbar.js';
const MuiBox = styled(Box)({
  margin: '2vw auto',
  background: '#ad8262',
  display: 'flex',

  '& p': {
    fontFamily: 'Open Sans Condensed',
    textTransform: 'uppercase',
    fontWeight: 'lighter',
    color: 'white',
    margin: '2vw auto',
  },
  '& form': {
    color: '#ad8262',
    '& input': {
      margin: '1vw auto',
      padding: '1vw',

    }
  },

})

class Forgot extends React.Component {
    forgot = (ev)=> {
    ev.preventDefault();
    this.props.forgotPassword(this.props.userVal);

  }
  render() {
    return (
      <>
      <NavBar />
      <MuiBox>
        <p><b>Passwort vergessen?</b> Email Adresse eingeben und wir senden Ihnen den Link zum zurücksetzen des Passwortes.</p>
        <form type="submit" onSubmit={this.forgot}>
        <input placeholder="email" type="email" id="forgot" onChange={this.props.changeInput} value={this.props.userVal}></input>
        </form>
      </MuiBox>
      </>
    )
  }
}
export const ForgotRX = connect(mapStateToProps, mapDispatchToProps)(Forgot);
