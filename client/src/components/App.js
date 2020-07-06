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
          <Portfolio />
          <div className='Footer'>Thank you</div>
        </div>
      </div>
    );
  }
}

export default App;
