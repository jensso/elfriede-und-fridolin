import React from 'react';
import { styled } from '@material-ui/styles';
import Link from '@material-ui/core/Link';



const MyLink =styled(Link)({
  padding: '0.5vw',
  margin: '1vw auto',
  color: '#753',
  '& i': {
    padding: '0.5vw',
    color: 'grey',
  }

})
class SocialMedia extends React.Component {
  render() {
    return(
      <>
        <MyLink href="https://www.facebook.com"><i className='fab'>&#xf09a;</i>facebook</MyLink>
        <MyLink href="https://www.youtube.com"><i className='fab'>&#xf431;</i>youtube</MyLink>
        <MyLink href="https://www.instagram.de"><i className='fab'>&#xf16d;</i>instagram</MyLink>
        <MyLink href="https://www.pinterest.de"><i className='fab'>&#xf0d2;</i>pinterest</MyLink>
      </>
    )
  }
}
export default SocialMedia;
