import React from 'react';
import { styled } from '@material-ui/styles';
import {Box,Button} from '@material-ui/core';
import { NavBar } from './navbar.js';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

const MuiBox = styled(Box)({
  '& h2': {
    fontFamily: 'Amatic SC',
    margin: '4vw',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  '& a': {
    padding: '2vw',
    margin: '4vw',
    color: '#bda96c',
    textDecoration: 'none',
  },
  '& main': {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '2vw auto',
  '& section': {
    display: 'flex',
    padding: '1vw',
    margin: '0.5vw',
    border: '0.1vw dotted #bda96c',
    width: '30%',
    '&:nth-of-type(even)': {
      background: '#ad8262',
      '& span': {
        color: 'white',
      }
    },

    '& img': {
      width: '50%',
      height: '95%',
      padding: '0.4vw',
      border: '0.1vw solid #999',
      background: '#b5c4af',
    },
    '& div': {
      padding: '0.4vw 1vw',
      display: 'flex',
      flexDirection: 'column',
      '& h5': {
        fontFamily: 'Amatic SC',
        fontSize: '1.5vw',
      },
      '& p': {
        textAlign: 'center',
        fontFamily: 'Amatic SC',
        fontSize: '1vw',
        flexGrow: '1',
      },
      '& span': {
        color: 'grey',
        fontSize: '1vw',
      },
      '& button': {
        background: 'white',
        padding: '0.4vw',
        margin: '0.4vw',
        border: '0.1vw solid grey',
        borderRadius: '1vw',
        opacity: '0.6',
        '&:hover': {
          color: 'olive',
          opacity: '1',
        }
      },
      '& i': {
        color: 'grey',
        padding: '0.4vw',
    }

    },
  },
},
})
export class Clothes extends React.Component {
  componentDidMount() {
    this.props.makeFetch();
  }

  render() {
    return (
      <MuiBox>
        <NavBar />
        <h2 onClick={this.props.makeFetch}>Kleidung</h2>
        <Button onClick={this.props.filterData}>Damen</Button>
        |
        <Button onClick={this.props.filterData}>Kinder</Button>
        |
        <Button onClick={this.props.filterData}>Accessoires</Button>
        <main>
          {this.props.shownPatterns.map((obj, index)=>
            <section key={index}>
            <img src={require(`../content/images/${obj.produktfotos[0]}.jpg`)} alt={`pic of ${obj.produktfotos[0]}`}></img>
             <div>
             <h5>{obj.produktname}</h5>
             <p>{obj.produktbeschreibung}</p>
             <span>{obj.preis}</span>
             <button onClick={(ev)=>console.log(ev)}>
               in den Warenkorb<i className="material-icons">&#xe8cc;</i>
             </button>
               </div>
           </section>
)}
        </main>
      </MuiBox>
    )
  }
}
export const ClothesRX = connect(mapStateToProps,mapDispatchToProps)(Clothes);