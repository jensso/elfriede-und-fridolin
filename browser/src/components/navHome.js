import React from 'react';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import Minnie from '../content/images/Minnie_Mouse.png';


const MuiNavHome= styled(Container)({
  color: '#753',
  margin: '2vw auto',
  fontFamily: 'Amatic SC',
  '& section': {
    display: 'flex',
    '& div': {
      '& img': {
        '&:nth-of-type(1)': {
          width: '45%',
          height: '60%',
          paddingTop: '4vw',
          transform: 'skew(15deg) scaleX(-1)',
        },
        '&:nth-of-type(2)': {
          width: '45%',
          height: '80%',
          paddingTop: '8vw',
          transform: 'skew(-5deg)',
        },
      },
      width: '50%',
      margin: '2vw',
      '& h3': {
        textAlign: 'center',
      },
      '& p': {
        fontFamily: 'Open Sans Condensed Light',
        textAlign: 'left',
      },
      '& a': {
        textDecoration: 'none',
        color: 'navy',
      },
    },
  },
});

export class NavHome extends React.Component {
  render() {
    return (
      <MuiNavHome>
      <h2>...eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich dem süßen Frühling...</h2>
      <section>
          <div>
            <img src={Minnie} alt="not available"></img>
            <img src={Minnie} alt="not available"></img>
          </div>
          <div>
            <h3>MOIN!</h3>
            <p>
              Ich bin Antje - zweifache Mutter, Ehefrau und ein echtes Küstenkind. <br/>
              Geboren an der Ostsee, zu Hause in Hamburg.<br/>
              Ich bin gerne frei und trage mein Herz auf der Zunge.<br/>
              Ich bin die, die trotz tausender Listen, doch was vergisst. Aber auch die, die ohne Listen nicht leben kann.
              Ich bin die, die sich einen Wecker stellt, um das Trinken nicht zu vergessen.
              Die aber schon zum Frühstück gern warm isst und an keinem Kuchen vorbei gehen kann, ohne ihn zu probieren.
              Die, die immer mal gern einen Tag offline ist.<br/>
              <b>Ich bin ein Nähnerd!</b><br/>
              Ich nähe, was MIR gefällt und helfe dir gern, zu nähen, was DIR gefällt.<br/>
              Mein Ziel ist es, dir die Leidenschaft fürs Nähen näher zu bringen. Das ist als studierte Pädagogin auch meine ganz persönliche Stärke.
              Meine Anleitungen sind sehr ausführlich und immer gespickt mit Tipps und Tricks, die du auch für alle anderen Schnitte nutzen kannst.
              <br/><br/>
              Meine Schnitte entwerfe ich nach Lust und Laune, mal mit norddeutscher Zurückhaltung, mal auffällig. Ich mag Schnitte, die stylisch und funktional sind. Meine Entwürfe sind immer sehr variabel - sie sollen je nach Wunsch und Vorliebe genäht werden können. Neben dem look steht der Wohlfühlfaktor dabei ganz klar im Vordergrund.
              <br/>
              Auch für meine Kinderschnitte gilt es Funktionalität, Bewegungsfreiheit und Trends zu vereinbaren.
              Ganz gleich ob für die Großen oder Kleinen - ich lege Wert auf Professionalität!<br/>
              Für den perfekten Sitz werden all meine Schnitte von einer Schnittdirectrice gradiert.<br/>
              <br/>
              Neben dem designen von Schnittmustern erschaffe ich auch gern praktische Kleinigkeiten für dich und mich und andere an meiner Nähmaschine.<br/>
              Diese Einzelstücke findest du auch hier im Shop.
              Aber Achtung: es handelt sich (meist) um absolute Einzelstücke, die es so eben nur ein einziges Mal geben wird. 
              <i>Es gilt also: Wenn weg, dann weg.</i>
              <br/>
              Wenn du jedoch bestimmte Wünsche zu einem Artikel hast, schreib mich gern an und wir finden das Passende für dich!
            </p>
            <a href="https://www.google.com">hier erfährst Du mehr über mich</a>
          </div>
        </section>
      </MuiNavHome>
    )
  }
}
