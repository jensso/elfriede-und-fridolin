import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import home_1 from '../content/images/home_1.jpg';
import home_2 from '../content/images/home_2.jpg';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 600,
    width: 500,
    boxShadow: 'none',
    backgroundColor: 'turquoise',
    borderRadius: '0',
    backgroundImage: [
                      `url(${home_1})`,
                      `url(${home_2})`,
                      ]
  },
  img: {
    backroundImage: `url(${home_2})`
  },
  control: {
    padding: '1vw',
  },
}));

function SpacingGrid() {
  const spacing = '1';
  const classes = useStyles();
  const value = classes.paper.backgroundImage;

  return (
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" />
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// export default SpacingGrid;

export class HomeGallery extends React.Component {
  render() {
    return(
      <>
        <SpacingGrid/>
      </>
      )
  }
}
