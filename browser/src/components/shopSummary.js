import React from 'react';
import { styled } from '@material-ui/styles';
import { Box, Button} from '@material-ui/core';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../helpers/mapRedux.js';

const MuiBox = styled(Box)({

  '& div': {
    // margin: '10% 25% !important',

    '& section': {
        outline: 'none !important',
        borderTop: '1px solid #ad8262',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '60%',
        margin: '0 auto',

        // '& h2': {
        //   fontFamily: 'Open Sans Condensed',
        //   textTransform: 'uppercase',
        //   fontWeight: 'lighter',
        //   letterSpacing: '0.5rem',
        //   color: '#ad8262',
        //   '&:hover': {
        //     cursor: 'pointer',
        //     fontWeight: 'bolder',
        //   }
        // },

        '& span': {
          fontFamily: 'Open Sans Condensed',
          fontWeight: 'bolder',
          textTransform: 'capitalize',
          letterSpacing: '0.2rem',
          margin: '1rem 1rem !important',
          fontSize: '0.8rem',
          color: '#9C938E',

          '&:hover': {
            color: '#B5C4AF',
          },
          '&:active': {
            color: '#B5C4AF',
          },
        },

        '& p': {
          textAlign: 'center !important',
          margin: '0 !important',
        }

    },

    // '& main': {
    //   display: 'flex',
    //   width: '100%',
    //   margin: '0 auto',
    //
    //   '@media (max-width: 600px)': {
    //     flexWrap: 'wrap',
    //   },
    //
    //   '& div': {
    //     display: 'flex',
    //     flexGrow: '1',
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     width: '33.33%',
    //     margin: '1rem 2rem',
    //
    //     '& h5': {
    //       fontFamily: 'Amatic SC',
    //       textAlign: 'center',
    //       fontSize: '0.rem',
    //       letterSpacing: '0.1rem',
    //       color: '#ad8262',
    //       },
    //
    //     '& img': {
    //       maxWidth: '90%',
    //       margin: '1rem auto',
    //       // padding: '0.3rem',
    //         },
    //
    //     '& p' : {
    //       fontSize: '0.5rem',
    //       fontFamily: 'Open Sans',
    //       color: '#9C938E',
    //       textAlign: 'left',
    //       margin: '1rem 1rem',
    //     },
    //
    //     '& button': {
    //       border: 'none',
    //     },
    //
    //     '& div': {
    //       marginLeft: '0',
    //       marginRight: '0',
    //     },
    //
    //       '&:nth-of-type(1)': {
    //         '& section': {
    //         outline: '0.1rem dotted #ad8262',
    //         outlineOffset: '0.2rem',
    //
    //         '& div': {
    //           width: '100%',
    //           display: 'flex',
    //           flexDirection: 'row',
    //           justifyContent: 'space-between'
    //         },
    //
    //         '& span': {
    //           '&:hover': {
    //             color: '#9C938E',
    //           }
    //         }
    //
    //       },
    //     },
    //
    //       '&:nth-of-type(even)': {
    //         '& section': {
    //         backgroundColor: '#ad8262',
    //         marginTop: '-0.2rem',
    //         paddingTop: '0.2rem',
    //
    //         '& div': {
    //           width: '100%',
    //           display: 'flex',
    //           flexDirection: 'row',
    //           justifyContent: 'space-between'
    //         },
    //
    //         '& p, span': {
    //           color: 'white',
    //         },
    //
    //         '& button': {
    //           color: 'white',
    //           '&:hover': {
    //             color: '#B5C4AF',
    //           }
    //         }
    //       },
    //     },
    //
    //       '&:nth-of-type(3)': {
    //         '& section': {
    //         outline: '0.1rem solid #ad8262',
    //         outlineOffset: '0.2rem',
    //
    //         '& div': {
    //           width: '100%',
    //           display: 'flex',
    //           flexDirection: 'row',
    //           justifyContent: 'space-between'
    //         },
    //
    //         '& span': {
    //           '&:hover': {
    //             color: '#9C938E',
    //           }
    //         }
    //       },
    //     },
    //
    //   },
    // },

    '& button': {
      fontSize: '1rem',
      color: 'white',
      fontFamily: 'Open Sans Condensed',
      // fontWeight: 'bolder',
      letterSpacing: '0.1rem',
      background: '#ad8262',
      textTransform: 'uppercase',
      margin: '2vw 33.3%',

      '&:hover': {
        background: '#B5C4AF',
      },
      '&:focus': {
        outline: 'none',
      },
    },
  }

})

class ShopSummary extends React.Component {
  render() {
    return(
      <MuiBox>
        <div>
          <section>
              <span>netto {(this.props.total/1.19).toFixed(2)}</span>
              <p>zzgl. MwSt {(this.props.total*0.19/1.19).toFixed(2)}</p>
              <p>+ Versandkosten {(6.9).toFixed(2)}</p>
              <span>Summe: € {(this.props.total+6.9).toFixed(2)}</span>
          </section>

          <Button onClick={this.props.submit}>bestellen</Button>
        </div>
      </MuiBox>
    )
  }
}
export const ShopSummaryRX = connect(mapStateToProps,mapDispatchToProps)(ShopSummary);
