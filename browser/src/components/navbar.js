import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
// import { NavGallery } from './navGallery.js';
// import { NavHome } from './navHome.js';
// import { ShoppingBasketRX } from './shoppingBasket.js';
import { UserLogin } from './userLogin.js';
import { AdminLogin } from './adminLogin.js';
// import { NewsSection } from './news.js';
// import watercolour_green from '../content/images/watercolour_green.png';

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
          <NavLink to="/Info">Info</NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
}
// function SimpleMenuGallery() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//
//     function handleClick(event) {
//       setAnchorEl(event.currentTarget);
//     }
//
//     function handleClose() {
//       setAnchorEl(null);
//     }
//
//   return (
//     <div>
//       <Button aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
//        GALLERY
//       </Button>
//       <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//         <MenuItem onClick={handleClose}><NavGallery /></MenuItem>
//       </Menu>
//     </div>
//   );
// }
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
      <MuiNavBar injectfirst="true">
        <SimpleMenuHome />
        <SimpleMenuShop />
        <SimpleMenuNews />
        <SimpleMenuBasket />
        <SimpleMenuLogin />
      </MuiNavBar>
      )
  }
}
