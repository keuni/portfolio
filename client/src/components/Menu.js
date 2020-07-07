import React, { Fragment } from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onClicked: null,
    };

    this.clickHome = this.clickHome.bind(this);
    this.clickAboutMe = this.clickAboutMe.bind(this);
    this.clickPortfolio = this.clickPortfolio.bind(this);
  }

  menuClicked(e) {
    let key = e.target.id;
    if (key) {
      this.setState({
        onClicked: key,
      });
    }
  }

  clickHome() {
    document.getElementById('HOME').scrollIntoView({ behavior: 'smooth' });
  }

  clickAboutMe() {
    document.getElementById('ABOUTME').scrollIntoView({ behavior: 'smooth' });
  }

  clickPortfolio() {
    document.getElementById('PORTFOLIO').scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className='topMenu'>
        <div
          className={this.props.ColorMode ? 'Menu MenuColormode' : 'Menu'}
          onClick={this.menuClicked.bind(this)}
        >
          <div className='Menus mainMenus'>
            <span id='home' onClick={this.clickHome}>
              Home
            </span>
          </div>
          <div className='Menus mainMenus'>
            <span id='aboutMe' onClick={this.clickAboutMe}>
              About me
            </span>
          </div>
          <div className='Menus mainMenus'>
            <span id='portfolio' onClick={this.clickPortfolio}>
              Portfolio
            </span>
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
      </div>
    );
  }
}
