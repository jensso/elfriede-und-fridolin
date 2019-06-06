import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function Datenschutz() {
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
        Datenschutz
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Datenschutzerklärung"}</DialogTitle>
        <DialogContent>
        1) Information über die Erhebung personenbezogener Daten und Kontaktdaten des Verantwortlichen<br/>
        <br/>1.1 Wir freuen uns, dass Sie unsere Website besuchen und bedanken uns für Ihr Interesse. Im Folgenden informieren wir Sie über den Umgang mit Ihren personenbezogenen Daten bei Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen Sie persönlich identifiziert werden können.
        <br/>1.2 Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist <br/> Antje Abeler, Elfriede und Fridolin, <br/>Horner Landstraße 146, 22111 Hamburg, Deutschland, <br/>Tel.: 0173 58 52 917, <br/>E-Mail: elfriede-und-fridolin@gmx.de.<br/>Der für die Verarbeitung von personenbezogenen Daten Verantwortliche ist diejenige natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
        <br/>1.3 Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener Daten und anderer vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den Verantwortlichen) eine SSL-bzw. TLS-Verschlüsselung. Sie können eine verschlüsselte Verbindung an der Zeichenfolge „https://“ und dem Schloss-Symbol in Ihrer Browserzeile erkennen.
        <br/>
        <br/>2) Datenerfassung beim Besuch unserer Website<br/>
        Bei der bloß informatorischen Nutzung unserer Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln, erheben wir nur solche Daten, die Ihr Browser an unseren Server übermittelt (sog. „Server-Logfiles“). Wenn Sie unsere Website aufrufen, erheben wir die folgenden Daten, die für uns technisch erforderlich sind, um Ihnen die Website anzuzeigen:
        <br/>- Unsere besuchte Website
        <br/>- Datum und Uhrzeit zum Zeitpunkt des Zugriffes
        <br/>- Menge der gesendeten Daten in Byte
        <br/>- Quelle/Verweis, von welchem Sie auf die Seite gelangten
        <br/>- Verwendeter Browser
        <br/>- Verwendetes Betriebssystem
        <br/>- Verwendete IP-Adresse (ggf.: in anonymisierter Form)
        <br/>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website. Eine Weitergabe oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten uns allerdings vor, die Server-Logfiles nachträglich zu überprüfen, sollten konkrete Anhaltspunkte auf eine rechtswidrige Nutzung hinweisen.
        <br/>
        <br/>3) Cookies<br/>
        Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen Seiten sogenannte Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Einige der von uns verwendeten Cookies werden nach dem Ende der Browser-Sitzung, also nach Schließen Ihres Browsers, wieder gelöscht (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endgerät und ermöglichen uns oder unseren Partnerunternehmen (Cookies von Drittanbietern), Ihren Browser beim nächsten Besuch wiederzuerkennen (persistente Cookies). Werden Cookies gesetzt, erheben und verarbeiten diese im individuellen Umfang bestimmte Nutzerinformationen wie Browser- und Standortdaten sowie IP-Adresswerte. Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je nach Cookie unterscheiden kann.
        Teilweise dienen die Cookies dazu, durch Speicherung von Einstellungen den Bestellprozess zu vereinfachen (z.B. Merken des Inhalts eines virtuellen Warenkorbs für einen späteren Besuch auf der Website). Sofern durch einzelne von uns implementierte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.
        Wir arbeiten unter Umständen mit Werbepartnern zusammen, die uns helfen, unser Internetangebot für Sie interessanter zu gestalten. Zu diesem Zweck werden für diesen Fall bei Ihrem Besuch unserer Website auch Cookies von Partnerunternehmen auf Ihrer Festplatte gespeichert (Cookies von Drittanbietern). Wenn wir mit vorbenannten Werbepartnern zusammenarbeiten, werden Sie über den Einsatz derartiger Cookies und den Umfang der jeweils erhobenen Informationen innerhalb der nachstehenden Absätze individuell und gesondert informiert.
        Bitte beachten Sie, dass Sie Ihren Browser so einstellen können, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können. Jeder Browser unterscheidet sich in der Art, wie er die Cookie-Einstellungen verwaltet. Diese ist in dem Hilfemenü jedes Browsers beschrieben, welches Ihnen erläutert, wie Sie Ihre Cookie-Einstellungen ändern können. Diese finden Sie für die jeweiligen Browser unter den folgenden Links:
        <br/>Internet Explorer: <a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a>
        <br/>Firefox: <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen">https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen</a>
        <br/>Chrome: <a href="https://support.google.com/chrome/answer/95647?hl=de&hlrm=en">https://support.google.com/chrome/answer/95647?hl=de&hlrm=en</a>
        <br/>Safari: <a href="https://support.apple.com/kb/ph21411?locale=de_DE">https://support.apple.com/kb/ph21411?locale=de_DE</a>
        <br/>Opera: <a href="https://help.opera.com/en/latest/web-preferences/#cookies">https://help.opera.com/en/latest/web-preferences/#cookies</a>
        <br/>Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein kann.
        <br/>
        <br/>4) Kontaktaufnahme<br/>
        Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten im Falle eines Kontaktformulars erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet. Rechtsgrundlage für die Verarbeitung der Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        <br/>
        <br/>5) Datenverarbeitung bei Eröffnung eines Kundenkontos und zur Vertragsabwicklung<br/>
        Gemäß Art. 6 Abs. 1 lit. b DSGVO werden personenbezogene Daten weiterhin erhoben und verarbeitet, wenn Sie uns diese zur Durchführung eines Vertrages oder bei der Eröffnung eines Kundenkontos mitteilen. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Eine Löschung Ihres Kundenkontos ist jederzeit möglich und kann durch eine Nachricht an die o.g. Adresse des Verantwortlichen erfolgen. Wir speichern und verwenden die von Ihnen mitgeteilten Daten zur Vertragsabwicklung. Nach vollständiger Abwicklung des Vertrages oder Löschung Ihres Kundenkontos werden Ihre Daten mit Rücksicht auf steuer- und handelsrechtliche Aufbewahrungsfristen gesperrt und nach Ablauf dieser Fristen gelöscht, sofern Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten eingewilligt haben oder eine gesetzlich erlaubte weitere Datenverwendung von unserer Seite vorbehalten wurde, über die wir Sie nachstehend entsprechend informieren.
        <br/>
        <br/>6) Datenverarbeitung zur Bestellabwicklung<br/>
        6.1 Die von uns erhobenen personenbezogenen Daten werden im Rahmen der Vertragsabwicklung an das mit der Lieferung beauftragte Transportunternehmen weitergegeben, soweit dies zur Lieferung der Ware erforderlich ist. Ihre Zahlungsdaten geben wir im Rahmen der Zahlungsabwicklung an das beauftragte Kreditinstitut weiter, sofern dies für die Zahlungsabwicklung erforderlich ist. Sofern Zahlungsdienstleister eingesetzt werden, informieren wir hierüber nachstehend explizit. Die Rechtsgrundlage für die Weitergabe der Daten ist hierbei Art. 6 Abs. 1 lit. b DSGVO.
        <br/>6.2 Einsatz von speziellen Dienstleistern zur Bestellbearbeitung und -abwicklung
        <br/>- Billbee
        <br/>Die Bestellabwicklung erfolgt über den Dienstanbieter "Billbee" (Billbee GmbH, Paulinenstrasse 54, 32756 Detmold). Name, Anschrift sowie gegebenenfalls weitere personenbezogene Daten werden gemäß Art. 6 Abs. 1 lit. b DSGVO ausschließlich zur Abwicklung der Online-Bestellung an Billbee weitergegeben. Die Weitergabe Ihrer Daten erfolgt hierbei nur, soweit dies für die Abwicklung der Bestellung tatsächlich erforderlich ist. Details zum Datenschutz bei Billbee und die Datenschutzerklärung von Billbee sind auf der Internetseite von Billbee unter "billbee.de" einsehbar.
        <br/>6.3 Verwendung von Paymentdienstleistern (Zahlungsdienstleister)
        <br/>- Paypal
        <br/>Bei Zahlung via PayPal, Kreditkarte via PayPal, Lastschrift via PayPal oder – falls angeboten - "Kauf auf Rechnung" oder „Ratenzahlung“ via PayPal geben wir Ihre Zahlungsdaten im Rahmen der Zahlungsabwicklung an die PayPal (Europe) S.a.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (nachfolgend "PayPal"), weiter. Die Weitergabe erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO und nur insoweit, als dies für die Zahlungsabwicklung erforderlich ist.
        PayPal behält sich für die Zahlungsmethoden Kreditkarte via PayPal, Lastschrift via PayPal oder – falls angeboten - "Kauf auf Rechnung" oder „Ratenzahlung“ via PayPal die Durchführung einer Bonitätsauskunft vor. Hierfür werden Ihre Zahlungsdaten gegebenenfalls gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis des berechtigten Interesses von PayPal an der Feststellung Ihrer Zahlungsfähigkeit an Auskunfteien weitergegeben. Das Ergebnis der Bonitätsprüfung in Bezug auf die statistische Zahlungsausfallwahrscheinlichkeit verwendet PayPal zum Zwecke der Entscheidung über die Bereitstellung der jeweiligen Zahlungsmethode. Die Bonitätsauskunft kann Wahrscheinlichkeitswerte enthalten (sog. Score-Werte). Soweit Score-Werte in das Ergebnis der Bonitätsauskunft einfließen, haben diese ihre Grundlage in einem wissenschaftlich anerkannten mathematisch-statistischen Verfahren. In die Berechnung der Score-Werte fließen unter anderem, aber nicht ausschließlich, Anschriftendaten ein. Weitere datenschutzrechtliche Informationen, unter anderem zu den verwendeten Auskunfteien, entnehmen Sie bitte der Datenschutzerklärung von PayPal: https://www.paypal.com/de/webapps/mpp/ua/privacy-full
        Sie können dieser Verarbeitung Ihrer Daten jederzeit durch eine Nachricht an PayPal widersprechen. Jedoch bleibt PayPal ggf. weiterhin berechtigt, Ihre personenbezogenen Daten zu verarbeiten, sofern dies zur vertragsgemäßen Zahlungsabwicklung erforderlich ist.
        <br/>
        <br/>7) Rechte des Betroffenen<br/>
        7.1 Das geltende Datenschutzrecht gewährt Ihnen gegenüber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten umfassende Betroffenenrechte (Auskunfts- und Interventionsrechte), über die wir Sie nachstehend informieren:
        <br/>- Auskunftsrecht gemäß Art. 15 DSGVO: Sie haben insbesondere ein Recht auf Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten, die Verarbeitungszwecke, die Kategorien der verarbeiteten personenbezogenen Daten, die Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer bzw. die Kriterien für die Festlegung der Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung, Beschwerde bei einer Aufsichtsbehörde, die Herkunft Ihrer Daten, wenn diese nicht durch uns bei Ihnen erhoben wurden, das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftige Informationen über die involvierte Logik und die Sie betreffende Tragweite und die angestrebten Auswirkungen einer solchen Verarbeitung, sowie Ihr Recht auf Unterrichtung, welche Garantien gemäß Art. 46 DSGVO bei Weiterleitung Ihrer Daten in Drittländer bestehen;
        <br/>- Recht auf Berichtigung gemäß Art. 16 DSGVO: Sie haben ein Recht auf unverzügliche Berichtigung Sie betreffender unrichtiger Daten und/oder Vervollständigung Ihrer bei uns gespeicherten unvollständigen Daten;
        <br/>- Recht auf Löschung gemäß Art. 17 DSGVO: Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten bei Vorliegen der Voraussetzungen des Art. 17 Abs. 1 DSGVO zu verlangen. Dieses Recht besteht jedoch insbesondere dann nicht, wenn die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;
        <br/>- Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO: Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, solange die von Ihnen bestrittene Richtigkeit Ihrer Daten überprüft wird, wenn Sie eine Löschung Ihrer Daten wegen unzulässiger Datenverarbeitung ablehnen und stattdessen die Einschränkung der Verarbeitung Ihrer Daten verlangen, wenn Sie Ihre Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, nachdem wir diese Daten nach Zweckerreichung nicht mehr benötigen oder wenn Sie Widerspruch aus Gründen Ihrer besonderen Situation eingelegt haben, solange noch nicht feststeht, ob unsere berechtigten Gründe überwiegen;
        <br/>- Recht auf Unterrichtung gemäß Art. 19 DSGVO: Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen die Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismäßigen Aufwand verbunden. Ihnen steht das Recht zu, über diese Empfänger unterrichtet zu werden.
        <br/>- Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO: Sie haben das Recht, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen, soweit dies technisch machbar ist;
        <br/>- Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO: Sie haben das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten jederzeit mit Wirkung für die Zukunft zu widerrufen. Im Falle des Widerrufs werden wir die betroffenen Daten unverzüglich löschen, sofern eine weitere Verarbeitung nicht auf eine Rechtsgrundlage zur einwilligungslosen Verarbeitung gestützt werden kann. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt;
        <br/>- Recht auf Beschwerde gemäß Art. 77 DSGVO: Wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt, haben Sie - unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs - das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsortes, Ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes.
        <br/>7.2 WIDERSPRUCHSRECHT<br/>
        WENN WIR IM RAHMEN EINER INTERESSENABWÄGUNG IHRE PERSONENBEZOGENEN DATEN AUFGRUND UNSERES ÜBERWIEGENDEN BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG WIDERSPRUCH MIT WIRKUNG FÜR DIE ZUKUNFT EINZULEGEN.
        MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN KÖNNEN, DIE IHRE INTERESSEN, GRUNDRECHTE UND GRUNDFREIHEITEN ÜBERWIEGEN, ODER WENN DIE VERARBEITUNG DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN DIENT.
        WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN. SIE KÖNNEN DEN WIDERSPRUCH WIE OBEN BESCHRIEBEN AUSÜBEN.
        MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
        <br/>
        <br/>8) Dauer der Speicherung personenbezogener Daten<br/>
        Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche Aufbewahrungsfristen). Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und/oder unsererseits kein berechtigtes Interesse an der Weiterspeicherung fortbesteht.
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

export default Datenschutz;
