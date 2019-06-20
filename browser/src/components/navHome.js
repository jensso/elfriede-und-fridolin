import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import aboutMe_1 from '../content/images/aboutMe_1.jpg';
import aboutMe_2 from '../content/images/aboutMe_2.jpg';
import watercolour_green from '../content/images/watercolour_green.png';


const MuiNavHome= styled(Container)({
  color: '#9c938e',
  '& section': {
    marginTop: '2vw',
    display: 'flex',
    '@media (max-width: 600px)': {
      flexWrap: 'wrap',
    },

    '& div': {
      margin: '2vw',

      '&:nth-of-type(1)': {

        // flexGrow: '2',
        order: '1',
        '@media (min-width: 600px)': {
          flexGrow: '1',
        },
        // width: '40%',
          '& h2': {
            paddingLeft: '2vw',
            textAlign: 'center',
            fontFamily: 'Open Sans Condensed',
            fontWeight: 'lighter',
            fontSize: '150%',
            textTransform: 'Uppercase',
            // maxWidth: '30vw'
          },
          '& img': {
            paddingTop: '1vw',
            '&:nth-of-type(1)': {
              paddingLeft: '2vw',
              width: '100%',
              height: 'auto'
            },
            '&:nth-of-type(2)': {
              paddingRight: '10vw',
              width: '100%',
              height: 'auto'
            },
        },
      },

      '&:nth-of-type(2)': {
        // width: '60%',
        // maxWidth: '50%',
        // flexGrow: '3',
        '@media (min-width: 600px)': {
          order: '1',
        },

          '& div' : {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',

          '& h3': {
            marginTop: '0',
            marginLeft: '5vw',
            '@media (max-width: 600px)': {
              marginLeft: '38vw',
              fontSize: '180%',
            },
            position: 'absolute',
            fontFamily: 'Amatic SC',
            fontSize: '180%',
            textAlign: 'center'
          },

          '& img' : {
            width: '80% !important',
            position: 'relative',
            // marginTop: '-3%',
            // marginLeft: '30%',
            marginRight: '20%',
            zIndex: '-1',
            opacity: '0.5',
            // transform: 'translate(0 20vw)'
          },
        },

          '& p': {
            // paddingTop: '10%',
            fontFamily: 'Open Sans Condensed',
            fontWeight: 'lighter',
            textAlign: 'left',

            '& a': {
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#ad8262 !important'
            },
          },
        },
    },
  },
});

export class NavHome extends React.Component {
  render() {
    return (
      <MuiNavHome injectfirst="true" >
        <section>
          <div>
            <h2>"Ich bin gerne frei und trage mein Herz auf der Zunge.</h2>
            <img src={aboutMe_1} alt="antje_abeler"></img>
            <img src={aboutMe_2} alt="antje_abeler"></img>
          </div>
          <div>
            <div>
              <img src={watercolour_green} alt="watercolour_green"></img>
              <h3>MOIN!</h3>
            </div>
            <p>
              Ich bin Antje - zweifache Mutter, Ehefrau und ein echtes Küstenkind. Geboren an der Ostsee, zu Hause in Hamburg.<br/>
              <br/>
              Ich bin die, die trotz tausender Listen, doch was vergisst. Aber auch die, die ohne Listen nicht leben kann.
              Ich bin die, die sich einen Wecker stellt, um das Trinken nicht zu vergessen.
              Die aber schon zum Frühstück gern warm isst und an keinem Kuchen vorbei gehen kann, ohne ihn zu probieren.
              Die, die immer mal gern einen Tag offline ist.<br/><br/>
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
              Diese Einzelstücke findest du auch <Link className="link" to={`/Schnittmuster`}>hier in meinem Shop</Link>.
              Aber Achtung: es handelt sich (meist) um absolute Einzelstücke, die es so eben nur ein einziges Mal geben wird.
              <i>Es gilt also: Wenn weg, dann weg.</i>
              <br/>
              Wenn du jedoch bestimmte Wünsche zu einem Artikel hast, schreib mich gern an und wir finden das Passende für dich!
            </p>
          </div>
        </section>
      </MuiNavHome>
    )
  }
}
