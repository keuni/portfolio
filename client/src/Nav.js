import React from 'react';
import Menu from './Menu';

function Nav(props) {
  return (
    <nav className="Nav">
        <Menu handleModal={props.handleModal} ColorMode={props.ColorMode}/>
    </nav> 
  )
};

export default Nav;