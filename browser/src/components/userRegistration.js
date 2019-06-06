import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

const MuiUserRegistration = styled(Container)({
  textAlign: 'left',
  width: '50%',
  '& label, h6': {
  fontSize: '2vw',
  fontFamily: 'Amatic SC',
  fontWeight: 'bolder',
  color: '#753',
},
'& input': {
  float: 'right',
},
'& span': {
  color: 'grey',
  fontSize: '1vw',
},
'& button': {
  fontFamily: 'Amatic SC',
  background: 'red',
  margin: '0.5vw',
  float: 'right',
  '&:hover': {
    background: '#753',
  },
},
})
export class UserRegistration extends React.Component {
  render() {
    return (
      <MuiUserRegistration>
      <form>
        <h6>Anmeldedaten</h6>
        <label>Email-Adresse*</label><input></input><br />
        <label>Kennwort*</label><input></input><br />
        <label>Kennwortbestätigung*</label><input></input><br />
        <span>* Pflichtfelder</span><br />
        <h6>Adressdaten</h6>
        <label>Firma</label><input></input><br />
        <label>Anrede*</label><input></input><br />
        <label>Vorname*</label><input></input><br />
        <label>Nachname*</label><input></input><br />
        <label>Straße und Haus-Nr*</label><input></input><br />
        <label>PLZ*</label><input></input><br />
        <label>Ort*</label><input></input><br />
        <span>* Pflichtfelder</span>
        <Button>jetzt registrieren</Button>
      </form>
      </MuiUserRegistration>
    )
  }
}
