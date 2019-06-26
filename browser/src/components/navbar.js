import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';

function SimpleMenuHome() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
      HOME
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Gallerie">Gallerie</NavLink>
        </MenuItem>
      </Menu>
    </div>
    )
  }
function SimpleMenuShop() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
    function handleClose() {
      setAnchorEl(null);
    }

    return (
      <div>
        <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
        SHOP
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <NavLink to="/Schnittmuster">Schnittmuster</NavLink>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <NavLink to="/Kleidung">Kleidung</NavLink>
          </MenuItem>
        </Menu>
      </div>
    );
}
function SimpleMenuNews() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
       NEWS
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Neuheiten">Neuheiten</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <NavLink to="/Angebote">Angebote</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <NavLink to="/Blog">Info</NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}

function SimpleMenuBasket() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

return (
<div>
  <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
   WARENKORB
  </Button>
  <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
    <MenuItem onClick={handleClose}>
      <NavLink to="/Warenkorb">Warenkorb</NavLink>
    </MenuItem>
    <MenuItem onClick={handleClose}>
      <NavLink to="/Downloads">Downloads</NavLink>
    </MenuItem>
  </Menu>
</div>
);
}
function SimpleMenuLogin() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
       LOGIN
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>

        <MenuItem onClick={handleClose}>
          <NavLink to="/Login">Login</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <NavLink to="/UserRegistration">Registrierung</NavLink>
        </MenuItem>

      </Menu>
    </div>
  );
}

const MuiNavBar= styled(Container)({

  display: 'flex',
  background: 'white',
  margin: '0 auto',
  '& div': {
    margin: '1vw auto',
    '& button': {
      fontSize: '1rem',
      fontFamily: 'Open Sans Condensed',
      color: '#9c938e',
      letterSpacing: '0.1rem',
      border: 'none',
      '&:hover': {
        background: 'white',
        fontWeight: 'bolder',
      },
      '&:active': {
        color: '#753',
      },
    },

      '& ul': {
        '& li:nth-child(1)': {
          '& a' : {
            color: 'red',
          }
        }
      }


  },
});


export class NavBar extends React.Component {
  render() {
    return(
      <MuiNavBar>
        <SimpleMenuHome />
        <SimpleMenuShop />
        <SimpleMenuNews />
        <SimpleMenuBasket />
        <SimpleMenuLogin />
      </MuiNavBar>
      )
  }
}
