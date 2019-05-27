import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AllGesBed() {
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
        AGB
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"AGB"}</DialogTitle>
        <DialogContent>
          <div>
          Allgemeine Geschäftsbedingungen mit Kundeninformationen
          <ol><b>Inhaltsverzeichnis</b>
          <li>Geltungsbereich</li>
          <li>Vertragsschluss</li>
          <li>Widerrufsrecht</li>
          <li>Preise und Zahlungsbedingungen</li>
          <li>Liefer- und Versandbedingungen</li>
          <li>Einräumung von Nutzungsrechten für digitale Inhalte</li>
          <li>Eigentumsvorbehalt</li>
          <li>Mängelhaftung (Gewährleistung)</li>
          <li>Anwendbares Recht</li>
          <li>Alternative Streitbeilegung</li>
          </ol>
          <br />
          <section>
          1) Geltungsbereich<br/>
          <br/>1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der Antje Abeler, handelnd unter "Elfriede und Fridolin" (nachfolgend "Verkäufer"), gelten für alle Verträge über die Lieferung von Waren, die ein Verbraucher oder Unternehmer (nachfolgend „Kunde“) mit dem Verkäufer hinsichtlich der vom Verkäufer in seinem Online-Shop dargestellten Waren abschließt. Hiermit wird der Einbeziehung von eigenen Bedingungen des Kunden widersprochen, es sei denn, es ist etwas anderes vereinbart.
          <br/>1.2 Für Verträge über die Lieferung digitaler Inhalte gelten diese AGB entsprechend, sofern insoweit nicht ausdrücklich etwas Abweichendes geregelt ist.
          <br/>1.3 Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer im Sinne dieser AGB ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.
          <br/>1.4 Digitale Inhalte im Sinne dieser AGB sind alle nicht auf einem körperlichen Datenträger befindlichen Daten, die in digitaler Form hergestellt und vom Verkäufer unter Einräumung bestimmter in diesen AGB genauer geregelten Nutzungsrechte, bereitgestellt werden.
          <br/><br/>
          2) Vertragsschluss<br/>
        <br/>2.1 Die im Online-Shop des Verkäufers enthaltenen Produktbeschreibungen stellen keine verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.
        <br/>2.2 Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten Waren in den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat, durch Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich verbindliches Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab.
        <br/>2.3 Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen annehmen,
          <br/>- indem er dem Kunden eine schriftliche Auftragsbestätigung oder eine Auftragsbestätigung in Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang der Auftragsbestätigung beim Kunden maßgeblich ist, oder
          <br/>- indem er dem Kunden die bestellte Ware liefert, wobei insoweit der Zugang der Ware beim Kunden maßgeblich ist, oder
          <br/>- indem er den Kunden nach Abgabe von dessen Bestellung zur Zahlung auffordert.
        <br/>Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in dem Zeitpunkt zustande, in dem eine der vorgenannten Alternativen zuerst eintritt. Die Frist zur Annahme des Angebots beginnt am Tag nach der Absendung des Angebots durch den Kunden zu laufen und endet mit dem Ablauf des fünften Tages, welcher auf die Absendung des Angebots folgt. Nimmt der Verkäufer das Angebot des Kunden innerhalb vorgenannter Frist nicht an, so gilt dies als Ablehnung des Angebots mit der Folge, dass der Kunde nicht mehr an seine Willenserklärung gebunden ist.
        <br/>2.4 Bei Auswahl der Zahlungsart „PayPal Express“ erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden: „PayPal“), unter Geltung der PayPal-Nutzungsbedingungen,
        einsehbar unter <a href="https://www.paypal.com/de/webapps/mpp/ua/useragreement-full">https://www.paypal.com/de/webapps/mpp/ua/useragreement-full</a> oder - falls der Kunde nicht über ein PayPal-Konto verfügt – unter Geltung der Bedingungen für Zahlungen ohne PayPal-Konto, einsehbar unter <a href="https://www.paypal.com/de/webapps/mpp/ua/privacywax-full">https://www.paypal.com/de/webapps/mpp/ua/privacywax-full</a>. Wählt der Kunde im Rahmen des Online-Bestellvorgangs „PayPal Express“ als Zahlungsart aus, erteilt er durch Klicken des den Bestellvorgang abschließenden Buttons zugleich auch einen Zahlungsauftrag an PayPal. Für diesen Fall erklärt der Verkäufer schon jetzt die Annahme des Angebots des Kunden in dem Zeitpunkt, in dem der Kunde durch Klicken des den Bestellvorgang abschließenden Buttons den Zahlungsvorgang auslöst.
        <br/>2.5 Bei der Abgabe eines Angebots über das Online-Bestellformular des Verkäufers wird der Vertragstext vom Verkäufer gespeichert und dem Kunden nach Absendung seiner Bestellung nebst den vorliegenden AGB in Textform (z. B. E-Mail, Fax oder Brief) zugeschickt. Zusätzlich wird der Vertragstext auf der Internetseite des Verkäufers archiviert und kann vom Kunden über sein passwortgeschütztes Kundenkonto unter Angabe der entsprechenden Login-Daten kostenlos abgerufen werden, sofern der Kunde vor Absendung seiner Bestellung ein Kundenkonto im Online-Shop des Verkäufers angelegt hat.
        <br/>2.6 Vor verbindlicher Abgabe der Bestellung über das Online-Bestellformular des Verkäufers kann der Kunde mögliche Eingabefehler durch aufmerksames Lesen der auf dem Bildschirm dargestellten Informationen erkennen. Ein wirksames technisches Mittel zur besseren Erkennung von Eingabefehlern kann dabei die Vergrößerungsfunktion des Browsers sein, mit deren Hilfe die Darstellung auf dem Bildschirm vergrößert wird. Seine Eingaben kann der Kunde im Rahmen des elektronischen Bestellprozesses so lange über die üblichen Tastatur- und Mausfunktionen korrigieren, bis er den den Bestellvorgang abschließenden Button anklickt.
        <br/>2.7 Für den Vertragsschluss steht ausschließlich die deutsche Sprache zur Verfügung.
        <br/>2.8 Die Bestellabwicklung und Kontaktaufnahme finden in der Regel per E-Mail und automatisierter Bestellabwicklung statt. Der Kunde hat sicherzustellen, dass die von ihm zur Bestellabwicklung angegebene E-Mail-Adresse zutreffend ist, so dass unter dieser Adresse die vom Verkäufer versandten E-Mails empfangen werden können. Insbesondere hat der Kunde bei dem Einsatz von SPAM-Filtern sicherzustellen, dass alle vom Verkäufer oder von diesem mit der Bestellabwicklung beauftragten Dritten versandten E-Mails zugestellt werden können.
        <br/><br/>
        3) Widerrufsrecht<br/>
        <br/>3.1 Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.
        <br/>3.2 Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des Verkäufers.
        <br/><br/>
        4) Preise und Zahlungsbedingungen<br/>
        <br/>4.1 Sofern sich aus der Produktbeschreibung des Verkäufers nichts anderes ergibt, handelt es sich bei den angegebenen Preisen um Gesamtpreise. Umsatzsteuer wird nicht ausgewiesen, da der Verkäufer Kleinunternehmer im Sinne des UStG ist. Gegebenenfalls zusätzlich anfallende Liefer- und Versandkosten werden in der jeweiligen Produktbeschreibung gesondert angegeben.
        <br/>4.2 Die Zahlungsmöglichkeit/en wird/werden dem Kunden im Online-Shop des Verkäufers mitgeteilt.
        <br/>4.3 Ist Vorauskasse per Banküberweisung vereinbart, ist die Zahlung sofort nach Vertragsabschluss fällig, sofern die Parteien keinen späteren Fälligkeitstermin vereinbart haben.
        <br/>4.4 Bei Zahlung mittels einer von PayPal angebotenen Zahlungsart erfolgt die Zahlungsabwicklung über den Zahlungsdienstleister PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (im Folgenden: "PayPal"), unter Geltung der PayPal-Nutzungsbedingungen, einsehbar unter <a href="https://www.paypal.com/de/webapps/mpp/ua/useragreement-full">https://www.paypal.com/de/webapps/mpp/ua/useragreement-full</a> oder - falls der Kunde nicht über ein PayPal-Konto verfügt – unter Geltung der Bedingungen für Zahlungen ohne PayPal-Konto, einsehbar unter <a href="https://www.paypal.com/de/webapps/mpp/ua/privacywax-full">https://www.paypal.com/de/webapps/mpp/ua/privacywax-full</a>.
        <br/><br/>
        5) Liefer- und Versandbedingungen<br/>
        <br/>5.1 Die Lieferung von Waren erfolgt auf dem Versandweg an die vom Kunden angegebene Lieferanschrift, sofern nichts anderes vereinbart ist. Bei der Abwicklung der Transaktion ist die in der Bestellabwicklung des Verkäufers angegebene Lieferanschrift maßgeblich.
        <br/>5.2 Sendet das Transportunternehmen die versandte Ware an den Verkäufer zurück, da eine Zustellung beim Kunden nicht möglich war, trägt der Kunde die Kosten für den erfolglosen Versand. Dies gilt nicht, wenn der Kunde den Umstand, der zur Unmöglichkeit der Zustellung geführt hat, nicht zu vertreten hat oder wenn er vorübergehend an der Annahme der angebotenen Leistung verhindert war, es sei denn, dass der Verkäufer ihm die Leistung eine angemessene Zeit vorher angekündigt hatte. Ferner gilt dies im Hinblick auf die Kosten für die Hinsendung nicht, wenn der Kunde sein Widerrufsrecht wirksam ausübt. Für die Rücksendekosten gilt bei wirksamer Ausübung des Widerrufsrechts durch den Kunden die in der Widerrufsbelehrung des Verkäufers hierzu getroffene Regelung.
        <br/>5.3 Selbstabholung ist aus logistischen Gründen nicht möglich.
        <br/>5.4 Digitale Inhalte werden dem Kunden ausschließlich in elektronischer Form wie folgt überlassen:
          <br/>- per Download
          <br/>- per E-Mail
        <br/><br/>
        6) Einräumung von Nutzungsrechten für digitale Inhalte<br/>
        <br/>6.1 Sofern sich aus der Inhaltsbeschreibung im Online-Shop des Verkäufers nichts anderes ergibt, räumt der Verkäufer dem Kunden an den überlassenen Inhalten das nicht ausschließliche, örtlich und zeitlich unbeschränkte Recht ein, die überlassenen Inhalte ausschließlich zu privaten Zwecken zu nutzen.
        <br/>6.2 Eine Weitergabe der Inhalte an Dritte oder die Erstellung von Kopien für Dritte außerhalb des Rahmens dieser AGB ist nicht gestattet, soweit nicht der Verkäufer einer Übertragung der vertragsgegenständlichen Lizenz an den Dritten zugestimmt hat.
        <br/>6.3 Die Rechtseinräumung wird erst wirksam, wenn der Kunde die vertraglich geschuldete Vergütung vollständig geleistet hat. Der Verkäufer kann eine Benutzung der vertragsgegenständlichen Inhalte auch schon vor diesem Zeitpunkt vorläufig erlauben. Ein Übergang der Rechte findet durch eine solche vorläufige Erlaubnis nicht statt.
        <br/><br/>
        7) Eigentumsvorbehalt<br/>
        <br/>Tritt der Verkäufer in Vorleistung, behält er sich bis zur vollständigen Bezahlung des geschuldeten Kaufpreises das Eigentum an der gelieferten Ware vor.
        <br/><br/>
        8) Mängelhaftung (Gewährleistung)<br/>
      <br/>8.1 Ist die Kaufsache mangelhaft, gelten die Vorschriften der gesetzlichen Mängelhaftung.
      <br/>8.2 Abweichend hiervon gilt bei gebrauchten Waren: Mängelansprüche sind ausgeschlossen, wenn der Mangel erst nach Ablauf eines Jahres ab Ablieferung der Ware auftritt. Mängel, die innerhalb eines Jahres ab Ablieferung der Ware auftreten, können innerhalb der gesetzlichen Verjährungsfrist geltend gemacht werden. Die Verkürzung der Haftungsdauer auf ein Jahr gilt jedoch nicht
        <br/>- für Sachen, die entsprechend ihrer üblichen Verwendungsweise für ein Bauwerk verwendet worden sind und dessen Mangelhaftigkeit verursacht haben,
        <br/>- für Schadensersatz- und Aufwendungsersatzansprüche des Kunden, sowie
        <br/>- für den Fall, dass der Verkäufer den Mangel arglistig verschwiegen hat.
      <br/>8.3 Der Kunde wird gebeten, angelieferte Waren mit offensichtlichen Transportschäden bei dem Zusteller zu reklamieren und den Verkäufer hiervon in Kenntnis zu setzen. Kommt der Kunde dem nicht nach, hat dies keinerlei Auswirkungen auf seine gesetzlichen oder vertraglichen Mängelansprüche.
      <br/><br/>
      9) Anwendbares Recht<br/>
      <br/>Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland unter Ausschluss der Gesetze über den internationalen Kauf beweglicher Waren. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.
      <br/><br/>
      10) Alternative Streitbeilegung<br/>
      <br/>10.1 Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr
      Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten aus Online-Kauf- oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist.
      <br/>10.2 Der Verkäufer ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</section>
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

export default AllGesBed;
