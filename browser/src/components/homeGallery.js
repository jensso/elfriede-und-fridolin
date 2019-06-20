import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Button, Typography } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { NavBar } from './navbar.js';

// import home_1 from '../content/images/home_1.jpg';
// import home_2 from '../content/images/home_2.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
  {
    label: 'Barcode',
    imgPath: require(`../content/produktfotos_ef/barcode1.jpg`),
    },
  {
    label: 'Liebe-Glaube-Hoffnung',
    imgPath: require(`../content/produktfotos_ef/faith1.jpg`)  },
  {
      label: 'faith',
      imgPath: require(`../content/produktfotos_ef/faith2.jpg`)  },
  {
        label: 'Kalotte',
        imgPath:
        require(`../content/produktfotos_ef/kalotte1.jpg`)  },
  {
          label: 'Quadra 1',
          imgPath: require(`../content/produktfotos_ef/quadra1.jpg`)  },
  {
            label: 'Quadra 2',
            imgPath: require(`../content/produktfotos_ef/quadra2.jpg`)  },
  {
    label: 'Quadra 3',
    imgPath: require(`../content/produktfotos_ef/quadra3.jpg`)  },
  {
   label: 'Markise',
    imgPath: require(`../content/images/mood_markise.jpg`)  },
  {
    label: 'Triangulum 1',
    imgPath: require(`../content/produktfotos_ef/triangulum1.jpg`)  },
  {
  label: 'Triangulum 2',
  imgPath: require(`../content/produktfotos_ef/triangulum2.jpg`)
  },
  {
  label: 'Triangulum 3',
  imgPath: require(`../content/produktfotos_ef/triangulum3.jpg`)
  },
  {
  label: 'Triangulum 4',
  imgPath: require(`../content/produktfotos_ef/triangulum4.jpg`)
  },
  {
  label: 'Vestis 1',
  imgPath: require(`../content/produktfotos_ef/vestis1.jpg`)
  },
  {
  label: 'Vestis 2',
  imgPath: require(`../content/produktfotos_ef/vestis2.jpg`)
  },
  {
  label: 'Hoody',
  imgPath: require(`../content/images/home_1.jpg`)
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1vw auto',
  },
  header: {
    display: 'flex',
    // height: 'vw',
    padding: '2vw',
    backgroundColor: '#753',
    color: 'white',
    '& button': {
      color: 'white',
    }
  },
  img: {
    width: '100%',
    height: '35vw',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
              <img className={classes.img} src={step.imgPath} alt={step.label} />
              </>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.header}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}
export class HomeGallery extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <SwipeableTextMobileStepper />
      </>
    )
  }
}
