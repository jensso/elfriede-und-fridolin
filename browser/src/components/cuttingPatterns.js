import React from 'react';
import { connect } from 'react-redux';
import { fetchFromExpress } from '../redux.js';
import { styled } from '@material-ui/styles';
import {Box,Button} from '@material-ui/core';
import Minnie from '../content/images/Minnie_Mouse.png';
import { NavBar } from './navbar.js';

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
    margin: '2vw auto',
  '& section': {
    display: 'flex',
    padding: '2vw',
    margin: '2vw auto',
    border: '0.2vw dotted #bda96c',
    width: '30%',
    '&:nth-of-type(2)': {
      background: '#ad8262',
    },
    '& img': {
      width: '40%',
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
      },
      '& p': {
        textAlign: 'justify',
      }
    },
  },
},
})
export class CuttingPatterns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...this.props.payload],
      basket: [],
    }
  }
  componentDidMount() {
    this.props.makeFetch();
  }

  handleFilter(ev) {
      this.props.payload.filter((obj)=> {
      return obj.category.toLowerCase() === ev.target.innerText.toLowerCase();
    })
  }
  showAll(ev) {
     const shownPatterns = [...this.props.payload];
    }
    buyItem(ev) {
      console.log(this.state.basket);
    }

  render() {
    return (
      <MuiBox>
        <NavBar />
        <h2 onClick={this.showAll.bind(this)}>Schnittmuster</h2>
        <Button onClick={this.handleFilter.bind(this)}>Damen</Button>
        |
        <Button onClick={this.handleFilter.bind(this)}>Kinder</Button>
        |
        <Button onClick={this.handleFilter.bind(this)}>Acessoires</Button>
        <main>
          {this.props.payload.map((obj, index)=>
            <section key={index}>
             <img src={Minnie} alt="#"></img>
             <div>
                 <h5>{obj.produktname}</h5>
                 <p>{obj.produktbeschreibung}</p>
                 <span>{obj.preis}</span>
                 <button onClick={this.buyItem.bind(this)}>
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

const mapStateToProps = (state)=> {
  return {
      payload: state.payload
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    makeFetch: ()=> dispatch(fetchFromExpress())
  }
}
export const CuttingPatternsRX = connect(mapStateToProps,mapDispatchToProps)(CuttingPatterns)
