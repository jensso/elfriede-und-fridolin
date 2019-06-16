import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Mickey from '../content/images/Mickey_Mouse.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: '15vw',
    maxHeight: '45vw',
  },
  cardcontent: {
    background: 'lime',
  }
});

function ProductCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Mr. MM"
          image={Mickey}
          title="MickyMaus"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            Mickey Mouse
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Mickey Mouse is a funny animal cartoon character and the mascot of The Walt Disney Company.
              He was created by Walt Disney and Ub Iwerks at the Walt Disney Studios in 1928.
           </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          Share
        </Button>
        <Button size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
