import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  myButton: {
  margin: '0',
  pading: '0',
  width: '5%',
  height: '5%',
  backgroundColor: 'rgba(173,130,98,0.5)',
  color: '#ad8262',
  fontFamily: 'Open Sans Condensed',
  fontWeight: 'bolder',
  },
});

function CloseButton (){

 const classes = useStyles();

    return(
      <>
        <div>
          <Button className={classes.myButton}>X</Button>
        </div>
      </>
    )
};

export default CloseButton;
