import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Impressum
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Impressum"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <h4>Elfriede und Fridolin®</h4>
          <ul>Adresse
            <li>Horner Landstraße 146</li>
            <li>22111 Hamburg</li>
            <li>Deutschland</li>
          </ul>
          <span>Telefon	0173 58 52 917</span><hr/>
          <span>Ansprechpartner	Antje Abeler</span><hr/>
          <span>E-Mail	elfriede-und-fridolin@gmx.de</span><hr/>
          <ul>Bankverbindung
            <li>Name der Bank: ING DiBa</li>
            <li>IBAN: DE 73 5001 0517 5415 4560 16</li>
            <li>BIC: INGDDEFFXXX</li>
            <li>Kontoinhaber: Antje Abeler</li>
          </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
