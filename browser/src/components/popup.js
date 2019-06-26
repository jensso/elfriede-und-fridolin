import React from 'react';
import { styled } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MuiBox = styled(Box)({

//   '& a': {
//     cursor: 'pointer',
//     color: '#ad8262',
//   },
//
// '& div': {
//   '& div': {
//     '& ul' :{
//       '& li': {
//         '& main': {
//           backgroundColor: '#ad8262',
//           position: 'absolute',
//           top: '25%',
//           left: '20%',
//           color: 'white',
//           width: '50%',
//           padding: '4vw',
//           display: 'flex',
//           letterSpacing: '0.2rem',
//
//           '& section': {
//               width: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               textAlign: 'center',
//               padding: '1vw 1vw',
//               outline: '0.1rem dotted white',
//
//               // '& h2': {
//               //   margin: '1rem auto',
//               //   padding: '0',
//               //   textAlign: 'center',
//               //   fontFamily: 'Open Sans Condensed',
//               //   textTransform: 'uppercase',
//               //   fontWeight: 'lighter',
//               //   letterSpacing: '0.5rem',
//               //   color: '#ad8262',
//               //   '&:hover': {
//               //     cursor: 'pointer',
//               //     fontWeight: 'bolder',
//               //   }
//               // },
//               '& h3': {
//                 fontFamily: 'Open Sans Condensed',
//                 textTransform: 'uppercase',
//                 fontWeight: 'lighter',
//                 textAlign: 'center',
//                 fontStyle: 'italic',
//                 fontSize: '1.5rem',
//                 margin: '0',
//                 letterSpacing: '0.2rem',
//                 color: 'white',
//                 },
//
//                 '& button': {
//                   margin: '1vw auto',
//                   padding: '0.5vw 2vw',
//                   fontSize: '1rem',
//                   color: 'white',
//                   fontFamily: 'Open Sans Condensed',
//                   fontWeight: 'bolder',
//                   letterSpacing: '0.1rem',
//                   color: '#ad8262',
//                   backgroundColor: 'white',
//                   borderRadius: '15%',
//
//                   '&:hover': {
//                     background: '#9c938e',
//                     color: 'white',
//                     },
//                   '&:focus': {
//                     outline: 'none',
//                     },
//                   }
//             },
//         },
//       }
//     }
//   },
//
// },
//
//   '& section': {
//       width: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//       textAlign: 'center',
//       padding: '1vw 1vw',
//       outline: '0.1rem dotted white',
//
//       // '& h2': {
//       //   margin: '1rem auto',
//       //   padding: '0',
//       //   textAlign: 'center',
//       //   fontFamily: 'Open Sans Condensed',
//       //   textTransform: 'uppercase',
//       //   fontWeight: 'lighter',
//       //   letterSpacing: '0.5rem',
//       //   color: '#ad8262',
//       //   '&:hover': {
//       //     cursor: 'pointer',
//       //     fontWeight: 'bolder',
//       //   }
//       // },
//       '& h3': {
//         fontFamily: 'Open Sans Condensed',
//         textTransform: 'uppercase',
//         fontWeight: 'lighter',
//         textAlign: 'center',
//         fontStyle: 'italic',
//         fontSize: '1.5rem',
//         margin: '0',
//         letterSpacing: '0.2rem',
//         color: 'white',
//         },
//
//         '& button': {
//           margin: '1vw auto',
//           padding: '0.5vw 2vw',
//           fontSize: '1rem',
//           color: 'white',
//           fontFamily: 'Open Sans Condensed',
//           fontWeight: 'bolder',
//           letterSpacing: '0.1rem',
//           color: '#ad8262',
//           backgroundColor: 'white',
//           borderRadius: '15%',
//
//           '&:hover': {
//             background: '#9c938e',
//             color: 'white',
//             },
//           '&:focus': {
//             outline: 'none',
//             },
//           }
//     },

})

function AlertDialog() {
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
       Open Popup
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>

        <MenuItem onClick={handleClose}>
        <main
          onClose={handleClose}>
            <section>
              <h3>Deine Bestellung ist bei uns angekommen und wird bearbeitet.<br></br>
              Vielen Dank und bis bald!</h3>
              <button onClick={handleClose}>OK</button>
            </section>
        </main>
        </MenuItem>

      </Menu>
    </div>
  );
}


export class PopUp extends React.Component {

  render() {
    return (
      <>
        <MuiBox>
          <AlertDialog />
        </MuiBox>
      </>
    )
  }
}
