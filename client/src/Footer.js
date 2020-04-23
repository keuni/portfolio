import React from 'react';

const Footer = (props) => {
  return(
    <div className={props.ColorMode ? 'Footer FooterColormode' : 'Footer'}>
      Thank you
    </div>
  )
}

export default Footer;