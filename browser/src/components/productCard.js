import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../content/images/logo.jpg';

const useStyles = makeStyles({
  root: {
    background: '#AD8262',
    color: 'white',
    padding: '0.4vw',
    margin: '0.4vw',
  },
  flex: {
    justifyContent: 'space-between',
  },
  card: {
    maxWidth: '30vw',
    padding: '0.4vw',
    margin: '0.4vw auto',
    background: '#9C938E',
    '&:hover': {
      background: '#AD8262',
    },
    '& img': {
      background: '#9C9',
      height: '25vw',
    },
  },
  button: {
    color: 'white',
    background: 'lightblue',
    margin: '0.1vw auto',
    '&:hover': {
      color: 'lightblue',
      background: 'grey',
      border: '0.1vw solid lightblue',
    }
  },
});

export function ProductCardStern() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
    <CardActionArea className={classes.flex}>
        <CardMedia
          component="img"
          alt="elfriede-und-fridolin.de"
          image={require('../content/forfree/stern.svg')}
          title="elfriede-und-fridolin"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            Stern mit Rand
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          ..ein Stern der deinen Namen trägt..
           </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}>
          kostenlos herunterladen
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
export function ProductCardMute() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.flex}>
        <CardMedia
          component="img"
          alt="elfriede-und-fridolin.de"
          image={require('../content/forfree/mute.png')}
          title="elfriede-und-fridolin"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            Mute
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          stille Nacht, heilige Nacht
           </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>
            kostenlos herunterladen
          </Button>
        </CardActions>
        </CardActionArea>
      </Card>
  );
}
export function ProductCardTutorial() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.flex}>
        <CardMedia
          component="img"
          alt="elfriede-und-fridolin.de"
          image={require('../content/forfree/tutorial_foto.png')}
          title="elfriede-und-fridolin"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            Tutorial "Lace-up"
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In dieser Anleitung zeige ich dir, wie du an jeden beliebigen Schnitt und jede Position ein lace up nähen kannst
           </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>
            kostenlos herunterladen
          </Button>
        </CardActions>
        </CardActionArea>
      </Card>
  );
}
