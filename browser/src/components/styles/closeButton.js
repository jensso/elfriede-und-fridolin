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


        // <div>
        //   <section>
        //     <span>netto
        //     <p>zzgl. MwSt</p>
        //     <p>+ Versandkosten</p>
        //     Summe: EUR
        //     </span><br></br>
        //
        //     <Button onClick={this.props.submit}>bestellen</Button>
        //   </section>
        // </div>

          // <main>
          //   <section>
          //     <div>
          //       <img src={require(`../content/produktfotos_ef/quadra3.jpg`)} alt="pic"></img>
          //     </div>
          //     <div>
          //       <h4>blablabla</h4>
          //       <p>By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.</p>
          //     </div>
          //     <div>
          //       <Button>Entfernen</Button>
          //       <article>3,44 EUR</article>
          //     </div>
          //   </section>
          // </main>
