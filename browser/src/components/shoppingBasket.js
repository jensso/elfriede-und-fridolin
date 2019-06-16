import React from 'react';
import {Box,Button} from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { NavBar } from './navbar.js';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

const basket = [{amount: '2',
                type: 'thing',
                price: 10,
                },
                {amount: '5',
                type: 'another thing',
                price: 12.5,
                }];
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
                        width: '25%',
                        padding: '0.5vw 4vw',
                        margin: '0.5vw',
                        background: 'salmon',
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

          {basket.map((obj, index)=>{
            return (
              <li key={index}>
                <Button onClick={this.props.removeItem}>X</Button>
                <img onClick={(ev)=>console.log(ev.currentTarget)} src={require(`../content/images/logo.jpg`)} alt="pic"></img>
                <span>
                  {obj.type}
                  <i>= summe</i>
                </span>
              </li>
          )
          })}
          </ul>

        </div>
      </MuiBox>
      </>
    )
  }
}
export const ShoppingBasketRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingBasket);
