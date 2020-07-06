import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import Portfolio from './portfolio/Portfolio';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onClicked: null,
    };
  }
  menuClicked(e) {
    let key = e.target.id;
    if (key) {
      this.setState({
        onClicked: key,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          <div
            className={this.props.ColorMode ? 'Menu MenuColormode' : 'Menu'}
            onClick={this.menuClicked.bind(this)}
          >
            <div className='Menus mainMenus'>
              <Link
                to='/'
                id='home'
                className={this.state.onClicked === 'home' ? 'menuOnClick' : ''}
              >
                Home
              </Link>
            </div>
            <div className='Menus mainMenus'>
              <Link
                to='/Aboutme'
                id='aboutMe'
                className={
                  this.state.onClicked === 'aboutMe' ? 'menuOnClick' : ''
                }
              >
                About me
              </Link>
            </div>
            <div className='Menus mainMenus'>
              <Link
                to='/portfolio'
                id='portfolio'
                className={
                  this.state.onClicked === 'portfolio' ? 'menuOnClick' : ''
                }
              >
                Portfolio
              </Link>
            </div>
            <div className='Menus Setting'>
              <label className='switch'>
                <input
                  className='box'
                  type='checkbox'
                  onClick={this.props.handleMode}
                ></input>
                <span className='slider round'></span>
              </label>
            </div>
          </div>
          <div
            className={
              this.props.ColorMode ? 'Appmain AppmainColormode' : 'Appmain'
            }
          >
            <Switch>
              <Route path='/Aboutme'>
                <Aboutme ColorMode={this.props.ColorMode} />
              </Route>
              <Route path='/portfolio'>
                <Portfolio ColorMode={this.props.ColorMode} />
              </Route>
              <Route path='/'>
                <Home ColorMode={this.props.ColorMode} />
              </Route>
            </Switch>
            <div className='Footer'>Thank you</div>
          </div>
        </Router>
      </Fragment>
    );
  }
}
