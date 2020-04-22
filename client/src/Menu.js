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
        <div className="Menu">
          <div className="Menus mainMenus">
            <Link to="/">Home</Link>
          </div>
          <div className="Menus mainMenus">
            <Link to="/Aboutme">About me</Link>
          </div>
          <div className="Menus mainMenus">
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="Menus Setting" onClick={props.handleModal}>
          <span id="settingLetter">Setting</span>
          </div>
        </div>
          <Switch>
            <Route path="/Aboutme">
              <Aboutme />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </Fragment>
  )
};

export default Menu;