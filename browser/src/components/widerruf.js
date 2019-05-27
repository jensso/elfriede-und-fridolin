import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function Widerruf() {
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
        Widerrufsrecht
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Widerruf"}</DialogTitle>
        <DialogContent>
          <h4>Widerrufsbelehrung & Widerrufsformular</h4>
          <div>
            Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu, wobei Verbraucher jede natürliche Person ist, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können:
          </div>
          <div>
          <h5>Widerrufsrecht</h5>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
          Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Antje Abeler, Elfriede und Fridolin, Horner Landstraße 146, 22111 Hamburg, Deutschland, Tel.: 01735852917, E-Mail: elfriede-und-fridolin@gmx.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          <h5>Folgen des Widerrufs</h5>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
          Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.
          Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
          Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
          <h5>Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts</h5>
          Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von digitalen Inhalten wie eBooks, Schnittmuster, Nähanleitungen oder Plottdateien.
          </div>
          <hr/>
          <div>
          <h5>Widerrufsformular</h5>
          <p>Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden es zurück an</p>
          <ul>
            <li>Antje Abeler</li>
            <li><i>Elfriede und Fridolin</i></li>
            <li>Horner Landstraße 146</li>
            <li>22111 Hamburg, Deutschland</li>
            <li>E-Mail: elfriede-und-fridolin@gmx.de</li>
            <section>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)
_______________________________________________________
_______________________________________________________<br/>
Bestellt am (*) __________________ /<br/> erhalten am (*) __________________
________________________________________________________<br/>
Name des/der Verbraucher(s)
________________________________________________________<br/>
Anschrift des/der Verbraucher(s)
________________________________________________________
Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br/>
_________________________<br/>
Datum<br/>
(*) Unzutreffendes streichen</section>
          </ul>
          </div>


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

export default Widerruf;
