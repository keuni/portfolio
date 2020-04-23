import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "./Appmain/Home"
import Aboutme from "./Appmain/Aboutme"
import Portfolio from "./Appmain/Portfolio"

function Menu(props) {
  return (
    <Fragment>
      <Router>      
        <div className={props.ColorMode ? 'Menu MenuColormode' : 'Menu'}>
          <div className="Menus mainMenus">
            <Link to="/">Home</Link>
          </div>
          <div className="Menus mainMenus">
            <Link to="/Aboutme">About me</Link>
          </div>
          <div className="Menus mainMenus">
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="Menus Setting">
            <label class="switch">
              <input class="box" type="checkbox" onClick={props.handleMode}></input>
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <div className={props.ColorMode ? 'Appmain AppmainColormode' : 'Appmain'}>
          <Switch>
              <Route path="/Aboutme">
                <Aboutme ColorMode={props.ColorMode} />
              </Route>
              <Route path="/portfolio">
                <Portfolio ColorMode={props.ColorMode} />
              </Route>
              <Route path="/">
                <Home ColorMode={props.ColorMode} />
              </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  )
};

export default Menu;