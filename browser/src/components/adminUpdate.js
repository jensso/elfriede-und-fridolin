import React from 'react';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/styles';

const MuiBox = styled(Box)({
  width: '66%',
  margin: '1vw auto',
  '& form': {
  display: 'flex',
  textAlign: 'left',
  flexDirection: 'column',
  '& label': {
    background: 'silver',
    padding: '0.5vw',
  }
},
})

const newProduct = {
  produktname: '',
  produktnummer: '',
  produktfotos: [],
  preis: 0,
  produktTyp: '',
  produktbeschreibung: '',
  category: '',
  id: '',
}
export class AdminUpdate extends React.Component {

  render() {
    return (
      <MuiBox>
        <h4>Hallo Antje, willkommen auf deiner AdminSeite</h4>
        <form>
          <label>1.produktname</label>
          <Input type="" value=""></Input>
          <label>2.produktnummer</label>
          <Input type="text"></Input>
          <label>3.produktfotos</label>
          <Input type=""></Input>
          <label>4.preis</label>
          <Input type=""></Input>
          <label>5.produktTyp</label>
          <Input type=""></Input>
          <label>6.produktbeschreibung</label>
          <Input type=""></Input>
          <label>7.category</label>
          <Input type=""></Input>
          <label>8.id</label>
          <Input type=""></Input>
        </form>
      </MuiBox>
    )
  }

}
