import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { styled } from '@material-ui/styles';
import Container from '@material-ui/core/Container';


const MuiAdminLogin = styled(Container)({
  display: 'flex',
  background: 'silver',
  width: '30%',
  border: '0.1vw solid silver',
  margin: '1vw auto',
  padding: '1vw',
})
export class AdminLogin extends React.Component {
  render() {
    return (
      <MuiAdminLogin>
      <FormGroup type="submit">
        <FormControl>
          <FormLabel>Admin Access Point</FormLabel>
          <Input type="text" placeholder="Admin"></Input>
        </FormControl>
        <FormControl>
          <Input type="password" placeholder="Password"></Input>
        </FormControl>
      </FormGroup>
      </MuiAdminLogin>
    )
  }
}
