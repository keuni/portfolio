import React from 'react';
import Menu from './Menu';

function Nav(props) {
  return (
    <nav className="Nav">
        <Menu ColorMode={props.ColorMode} handleMode={props.handleMode} />
    </nav> 
  )
};

export default Nav;