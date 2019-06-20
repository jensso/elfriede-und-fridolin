import React from 'react';
import { Input, Button} from '@material-ui/core';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/styles';

const MuiBox = styled(Box)({
  width: '66%',
  margin: '1vw auto',
  '& h4': {
    color: 'navy',
  },
  '& form': {
  display: 'flex',
  textAlign: 'left',
  flexDirection: 'column',
  '& label': {
    color: 'navy',
    background: 'silver',
    padding: '0.5vw',
    boxShadow: '0.4vw 0.3vw 0.1vw grey',
  },
  '& button': {
    color: 'navy',
    background: 'lightblue',
    '&:hover': {
      background: 'grey',
      color: 'lightblue',
    },
  },
},
})

class AdminUpdate extends React.Component {

  render() {
    return (
      <MuiBox>
        <h4>Hallo Antje, willkommen auf deiner AdminSeite</h4>
        <form>
          <label >1.produktname</label>
          <Input id="produktname" type="text" onChange={this.props.changeInput} value={this.props.inputVal1}></Input>
          <label>2.produktnummer</label>
          <Input id="produktnummer" type="text" onChange={this.props.changeInput} value={this.props.inputVal2}></Input>
          <label>3.produktfotos</label>
          <Input id="produktfotos" type="text" onChange={this.props.changeInput} value={this.props.inputVal3}></Input>
          <label>4.preis</label>
          <Input id="preis" type="number" onChange={this.props.changeInput} value={this.props.inputVal4}></Input>
          <label>5.produktTyp</label>
          <Input id="produktTyp" type="text" onChange={this.props.changeInput} value={this.props.inputVal5}></Input>
          <label>6.produktbeschreibung</label>
          <Input id="produktbeschreibung" type="text" onChange={this.props.changeInput} value={this.props.inputVal6}></Input>
          <label>7.category</label>
          <Input id="category" type="select" onChange={this.props.changeInput} value={this.props.inputVal7}></Input>
          <label>8.id</label>
          <Input id="id" type="text" onChange={this.props.changeInput} value={this.props.inputVal8}></Input>
          <Button>neuen Artikel senden und Datenbank aktualisieren</Button>
        </form>
      </MuiBox>
    )
  }

}
export const AdminUpdateRX = connect(mapStateToProps,mapDispatchToProps)(AdminUpdate);
