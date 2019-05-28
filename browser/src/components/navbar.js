import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/styles';


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
<MenuItem onClick={handleClose}>x</MenuItem>
<MenuItem onClick={handleClose}>xx</MenuItem>
<MenuItem onClick={handleClose}>xxx</MenuItem>
</Menu>
</div>
);
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
<MenuItem onClick={handleClose}>Schnittmuster</MenuItem>
<MenuItem onClick={handleClose}>Kleidung</MenuItem>
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
<MenuItem onClick={handleClose}>x</MenuItem>
<MenuItem onClick={handleClose}>xx</MenuItem>
<MenuItem onClick={handleClose}>xxx</MenuItem>
</Menu>
</div>
);
}
function SimpleMenuGallery() {
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
 GALLERY
</Button>
<Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
<MenuItem onClick={handleClose}>x</MenuItem>
<MenuItem onClick={handleClose}>xx</MenuItem>
<MenuItem onClick={handleClose}>xxx</MenuItem>
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
<MenuItem onClick={handleClose}>x</MenuItem>
<MenuItem onClick={handleClose}>xx</MenuItem>
<MenuItem onClick={handleClose}>xxx</MenuItem>
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
<MenuItem onClick={handleClose}>x</MenuItem>
<MenuItem onClick={handleClose}>xx</MenuItem>
<MenuItem onClick={handleClose}>xxx</MenuItem>
</Menu>
</div>
);
}

const MyNavBar= styled(Container)({
  display: 'flex',
  background: '#753',
  border: '0.2vw solid silver',
  margin: '0 auto',
  '& div': {
    margin: '1vw auto',
    '& button': {
      fontSize: '0.5vw',
      fontFamily: 'courier',
      color: 'white',
      border: 'none',
      '&:hover': {
        background: 'white',
        color: '#753',
      }
    },
  }
});


export class NavBar extends React.Component {
  render() {
    return(
      <MyNavBar>
        <SimpleMenuHome />
        <SimpleMenuShop />
        <SimpleMenuNews />
        <SimpleMenuGallery />
        <SimpleMenuBasket />
        <SimpleMenuLogin />
      </MyNavBar>
      )
  }
}
