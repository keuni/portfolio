import React from 'react';
import './style/App.css';
import Menu from './Menu';
import Home from './Home';
import AboutMe from './Aboutme';
import Portfolio from './portfolio/Portfolio';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ColorMode: false,
    };
    this.handleMode = this.handleMode.bind(this);
  }

  handleMode() {
    this.setState({
      ColorMode: !this.state.ColorMode,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      let y = window.scrollY;
      if (y < 370) {
        document.querySelector('#home').classList.add('menuOnClick');
        document.querySelector('#aboutMe').classList.remove('menuOnClick');
        document.querySelector('#portfolio').classList.remove('menuOnClick');
      } else if (y < 1000) {
        document.querySelector('#aboutMe').classList.add('menuOnClick');
        document.querySelector('#home').classList.remove('menuOnClick');
        document.querySelector('#portfolio').classList.remove('menuOnClick');
      } else {
        document.querySelector('#portfolio').classList.add('menuOnClick');
        document.querySelector('#home').classList.remove('menuOnClick');
        document.querySelector('#aboutMe').classList.remove('menuOnClick');
      }
    });
  }

  render() {
    return (
      <div className={this.state.ColorMode ? 'App Colormode' : 'App'}>
        <div>
          <Menu handleMode={this.handleMode} ColorMode={this.state.ColorMode} />
        </div>
        <div
          className={
            this.state.ColorMode ? 'Appmain AppmainColormode' : 'Appmain'
          }
        >
          <Home ColorMode={this.state.ColorMode} />
          <AboutMe />
          <Portfolio ColorMode={this.state.ColorMode} />
          <div className='Footer'>Thank you</div>
        </div>
      </div>
    );
  }
}

export default App;
