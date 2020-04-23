import React from 'react';
import './style/App.css';
import Nav from './Nav';
import Message from './Message';
import Footer from './Footer';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ColorMode: false
    }
    this.handleMode = this.handleMode.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  handleMode() {
    this.setState({
      ColorMode: !this.state.ColorMode
    })
  }
  handleModal() {
    document.querySelector('.myModal').classList.toggle('displayMyModal')
  }
  render() {
    return (
      <div className={this.state.ColorMode ? 'App Colormode' : 'App'} >
        <Modal handleModal={this.handleModal} />
        <div>
          <Nav handleMode={this.handleMode} ColorMode={this.state.ColorMode} />
        </div>
        <div>
          <Message ColorMode={this.state.ColorMode} handleModal={this.handleModal} />
          <Footer ColorMode={this.state.ColorMode}/>
        </div>
      </div>
    );
  }
}

export default App;
