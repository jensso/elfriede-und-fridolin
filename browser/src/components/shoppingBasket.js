import React from 'react';
import {Box,Button} from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { NavBar } from './navbar.js';
import { connect } from 'react-redux';
import { ShopSummaryRX } from './shopSummary.js';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

const MuiBox = styled(Box)({
                margin: '2vw auto',
                width: '80%',
                background: '#753',
                color: 'silver',
                '& div': {
                  margin: '1vw',
                  '& h2': {
                    fontFamily: 'Amatic SC',
                  },

                  '& ul': {
                    margin: '1vw',
                    listStyleType: 'none',
                    padding: '2vw',

                    '& li': {
                      display: 'flex',
                      opacity: '0.5',
                      border: '0.1vw solid #acd',
                      margin: '1vw',

                      '& button': {
                        padding: '1vw',
                        margin: '1vw',
                        alignSelf: 'center',
                        color: 'white',
                        borderRadius: '1vw',
                        '&:hover': {
                          background: 'white',
                          color: '#222',
                        },
                      },
                      '& img': {
                        width: '15vw',
                        height: '15vw',
                        padding: '0.5vw 4vw',
                        margin: '0.5vw',
                        backgroundSize: 'cover',
                      },
                      '& span': {
                        padding: '0.5vw',
                      }
                    },
                  },
                },
              })

class ShoppingBasket extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return(
      <>
      <NavBar />
      <MuiBox>
        <div>
          <h2>Deine Bestellung</h2>
          <ul>

          {this.props.basket.map((obj, index)=>{
            return (
              <li  key={index}>
                <Button id={obj.id} onClick={this.props.removeItem}>X</Button>
                <img onClick={(ev)=>console.log(ev.target.id)} src={require(`../content/produktfotos_ef/${obj.produktfotos[0]}.jpg`)} alt="pic"></img>
                <span>{obj.produktTyp}</span><br/>
                  <span>{obj.produktname}</span><br />
                  <span>{(obj.preis).toFixed(2)} €</span>
              </li>
          )
          })}
          </ul>
        </div>
        <ShopSummaryRX />
      </MuiBox>
      </>
    )
  }
}

export const ShoppingBasketRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingBasket);
