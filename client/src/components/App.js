import React from 'react';
import './style/App.css';
import Nav from './Nav';

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
          <Nav handleMode={this.handleMode} ColorMode={this.state.ColorMode} />
        </div>
      </div>
    );
  }
}

export default App;
