import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

const MuiUserLogin = styled(Container)({
  textAlign: 'center',
  '& p, input': {
    fontSize: '3vw',
    fontFamily: 'Amatic SC',
    fontWeight: 'bolder',
    color: '#753',
    margin: '1.5vw',
    padding: '0.5vw',
  },
  '& button': {
    fontFamily: 'Amatic SC',
    background: 'silver',
    margin: '0.5vw',
    '&:hover': {
      color: 'silver',
      background: '#753',
    },
  },
  '& a': {
    fontSize: '1vw',
    textDecoration: 'none',
  }
})
export class UserLogin extends React.Component {
  render() {
    return (
      <MuiUserLogin>
        <p>Anmeldung für registrierte Kunden</p>
        <form>
        <input type="text" placeholder="Email-Adresse"></input><br/>
        <input type="password" placeholder="Kennwort"></input><br/>
        <Button>Anmelden</Button>
        </form>
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Passwort vergessen?</a>
        <hr/>
        <p>Als neuer Kunde registrieren</p>
        <Button>Jetzt registrieren</Button>
      </MuiUserLogin>
    )
  }
}
