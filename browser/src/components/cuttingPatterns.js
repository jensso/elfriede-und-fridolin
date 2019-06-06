import React from 'react';
import { styled } from '@material-ui/styles';
import {Box,Button} from '@material-ui/core';
import Minnie from '../content/images/Minnie_Mouse.png';
import { NavBar } from './navbar.js';

const patterns = [
  {name: 'skirts',
  price: 7.95,
  description: 'a fancy skirt',
  category: 'Damen'
  },
  {name: 'another skirt',
  price: 17.95,
  description: 'a more fancy skirt',
  category: 'Damen'
  },
  {name: 'kiddy hoody',
  price: 6.99,
  description: 'a hoody for the kid',
  category: 'Kinder'
  },
  {name: 'sunglass box',
  price: 4.50,
  description: 'a box for your sunglasses',
  category: 'Acessoires'
  },
];
const MuiBox = styled(Box)({
  '& h2': {
    fontFamily: 'Amatic SC',
    margin: '4vw',
  },
  '& a': {
    padding: '2vw',
    margin: '4vw',
    color: '#bda96c',
    textDecoration: 'none',
  },
  '& main': {
    display: 'flex',
    margin: '2vw 0.5vw',
  '& section': {
    display: 'flex',
    padding: '2vw',
    margin: '2vw 0.4vw',
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
      products: patterns,
    }
    console.log(this.state);
  }
  handleFilter(ev) {
    const copyPatterns = [...patterns];
    const shownPatterns = copyPatterns.filter((obj)=> {
      return obj.category.toLowerCase() === ev.target.innerText.toLowerCase();

    })
    this.setState({
      products: shownPatterns
    })

    }

  render() {
    return (
      <MuiBox>
        <NavBar />
        <h2>Schnittmuster</h2>
        <Button onClick={this.handleFilter.bind(this)}>Damen</Button>
        |
        <Button onClick={this.handleFilter.bind(this)}>Kinder</Button>
        |
        <Button onClick={this.handleFilter.bind(this)}>Acessoires</Button>
        <main>
          {this.state.products.map((obj, index)=>
            <section key={index}>
             <img src={Minnie} alt="#"></img>
             <div>
                 <h5>{obj.name}</h5>
                 <p>{obj.description}</p>
                 <span>{obj.price}</span><i className="material-icons">&#xe8cc;</i>
               </div>
           </section>
)}
        </main>
      </MuiBox>
    )
  }
}
